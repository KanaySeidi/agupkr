import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { siteService } from '@/api/services/site.service';
import type { MainPage, Partner, SiteSettings, SocialLink } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type SiteState = {
  mainPage: MainPage | null;
  settings: SiteSettings | null;
  partners: Partner[];
  socialLinks: SocialLink[];
  byId: Record<number, MainPage>;
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Record<string, unknown>;
  count: number;
  items: MainPage[];
};

type SiteActions = {
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  setParams: (params: Record<string, unknown>) => void;
  fetchMainPage: () => Promise<void>;
  fetchSettings: () => Promise<void>;
  fetchPartners: () => Promise<void>;
  fetchSocialLinks: () => Promise<void>;
  reset: () => void;
};

const initialState: SiteState = {
  mainPage: null,
  settings: null,
  partners: [],
  socialLinks: [],
  byId: {},
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
  count: 0,
  items: [],
};

export const useSiteStore = create<SiteState & SiteActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchList: async () => {
        get().fetchMainPage();
      },

      fetchById: async (id: number) => {
        const found = get().mainPage;
        if (found && found.id === id) {
          set(state => ({ byId: { ...state.byId, [id]: found }, detailStatus: 'success' }));
        }
      },

      setParams: (params: Record<string, unknown>) => {
        set({ params });
        get().fetchList();
      },

      fetchMainPage: async () => {
        set({ status: 'loading', error: null });
        try {
          const data = await siteService.mainPage();
          set({ mainPage: data.results[0] ?? null, items: data.results, count: data.count, status: 'success' });
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ status: 'error', error: e.message ?? 'Error' });
        }
      },

      fetchSettings: async () => {
        try {
          const data = await siteService.settings();
          set({ settings: data.results[0] ?? null });
        } catch {
          // non-critical
        }
      },

      fetchPartners: async () => {
        try {
          const data = await siteService.partners();
          set({ partners: data.results });
        } catch {
          // non-critical
        }
      },

      fetchSocialLinks: async () => {
        try {
          const data = await siteService.socialLinks();
          set({ socialLinks: data.results });
        } catch {
          // non-critical
        }
      },

      reset: () => set(initialState),
    }),
    { name: 'SiteStore' }
  )
);
