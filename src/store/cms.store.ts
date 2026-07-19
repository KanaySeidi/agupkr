import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { cmsService } from '@/api/services/cms.service';
import type { AdminPage, AdminPageList, PageGroup } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type CmsState = {
  pagesByGroup: Partial<Record<PageGroup, AdminPageList[]>>;
  pageDetails: Partial<Record<string, AdminPage>>;
  groupStatus: Partial<Record<PageGroup, Status>>;
  detailStatus: Partial<Record<string, Status>>;
  error: string | null;
};

type CmsActions = {
  fetchGroup(group: PageGroup): Promise<void>;
  fetchPage(slug: string): Promise<void>;
  fetchGroupWithDetail(group: PageGroup): Promise<void>;
  reset(): void;
};

const initialState: CmsState = {
  pagesByGroup: {},
  pageDetails: {},
  groupStatus: {},
  detailStatus: {},
  error: null,
};

const controllers: Partial<Record<string, AbortController>> = {};

export const useCmsStore = create<CmsState & CmsActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchGroup: async (group) => {
        controllers[group]?.abort();
        controllers[group] = new AbortController();
        set(s => ({ groupStatus: { ...s.groupStatus, [group]: 'loading' } }));
        try {
          const data = await cmsService.getPagesByGroup(group, controllers[group]!.signal);
          set(s => ({
            pagesByGroup: { ...s.pagesByGroup, [group]: data },
            groupStatus: { ...s.groupStatus, [group]: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            set(s => ({
              groupStatus: { ...s.groupStatus, [group]: 'error' },
              error: (err as { message?: string }).message ?? 'Error',
            }));
          }
        }
      },

      fetchPage: async (slug) => {
        if (get().pageDetails[slug]) return;
        controllers[`page_${slug}`]?.abort();
        controllers[`page_${slug}`] = new AbortController();
        set(s => ({ detailStatus: { ...s.detailStatus, [slug]: 'loading' } }));
        try {
          const data = await cmsService.getPage(slug, controllers[`page_${slug}`]!.signal);
          set(s => ({
            pageDetails: { ...s.pageDetails, [slug]: data },
            detailStatus: { ...s.detailStatus, [slug]: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            set(s => ({
              detailStatus: { ...s.detailStatus, [slug]: 'error' },
              error: (err as { message?: string }).message ?? 'Error',
            }));
          }
        }
      },

      // Fetch group list then load detail for each page in parallel
      fetchGroupWithDetail: async (group) => {
        await get().fetchGroup(group);
        const pages = get().pagesByGroup[group] ?? [];
        await Promise.all(pages.map(p => get().fetchPage(p.slug)));
      },

      reset: () => {
        Object.values(controllers).forEach(c => c?.abort());
        set(initialState);
      },
    }),
    { name: 'CmsStore' }
  )
);
