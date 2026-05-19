import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { libraryService } from '@/api/services/library.service';
import type { LibraryCategory, LibraryResource } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Params = Record<string, unknown>;

type LibraryState = {
  categories: LibraryCategory[];
  items: LibraryResource[];
  count: number;
  byId: Record<number, LibraryResource>;
  categoriesStatus: Status;
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Params;
};

type LibraryActions = {
  fetchCategories: () => Promise<void>;
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  setParams: (params: Params) => void;
  reset: () => void;
};

const initialState: LibraryState = {
  categories: [],
  items: [],
  count: 0,
  byId: {},
  categoriesStatus: 'idle',
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
};

let listController: AbortController | null = null;

export const useLibraryStore = create<LibraryState & LibraryActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchCategories: async () => {
        if (get().categoriesStatus === 'success') return;
        set({ categoriesStatus: 'loading', error: null });
        try {
          const data = await libraryService.listCategories();
          set({ categories: data.results, categoriesStatus: 'success' });
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ categoriesStatus: 'error', error: e.message ?? 'Error' });
        }
      },

      fetchList: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await libraryService.listResources(get().params, listController.signal);
          set({ items: data.results, count: data.count, status: 'success' });
        } catch (err: unknown) {
          if ((err as { status?: number }).status !== undefined || (err as Error).name !== 'CanceledError') {
            const e = err as { message?: string };
            set({ status: 'error', error: e.message ?? 'Error' });
          }
        }
      },

      fetchById: async (id: number) => {
        if (get().byId[id]) return;
        set({ detailStatus: 'loading', error: null });
        try {
          const data = await libraryService.getResource(id);
          set(state => ({
            byId: { ...state.byId, [id]: data },
            detailStatus: 'success',
          }));
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ detailStatus: 'error', error: e.message ?? 'Error' });
        }
      },

      setParams: (params: Params) => {
        set({ params });
        get().fetchList();
      },

      reset: () => {
        listController?.abort();
        listController = null;
        set(initialState);
      },
    }),
    { name: 'LibraryStore' }
  )
);
