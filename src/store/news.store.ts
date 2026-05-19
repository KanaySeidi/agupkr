import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { newsService } from '@/api/services/news.service';
import type { News } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Params = Record<string, unknown>;

type NewsState = {
  items: News[];
  count: number;
  byId: Record<number, News>;
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Params;
  events: News[];
  pinned: News[];
};

type NewsActions = {
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  setParams: (params: Params) => void;
  fetchEvents: () => Promise<void>;
  fetchPinned: () => Promise<void>;
  reset: () => void;
};

const initialState: NewsState = {
  items: [],
  count: 0,
  byId: {},
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
  events: [],
  pinned: [],
};

let listController: AbortController | null = null;

export const useNewsStore = create<NewsState & NewsActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchList: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await newsService.list(get().params, listController.signal);
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
          const data = await newsService.getById(id);
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

      fetchEvents: async () => {
        try {
          const data = await newsService.events();
          set({ events: data });
        } catch {
          // non-critical; leave stale
        }
      },

      fetchPinned: async () => {
        try {
          const data = await newsService.pinned();
          set({ pinned: data });
        } catch {
          // non-critical; leave stale
        }
      },

      reset: () => {
        listController?.abort();
        listController = null;
        set(initialState);
      },
    }),
    { name: 'NewsStore' }
  )
);
