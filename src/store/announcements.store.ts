import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { announcementsService } from '@/api/services/announcements.service';
import type { Announcement } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Params = Record<string, unknown>;

type AnnouncementsState = {
  items: Announcement[];
  count: number;
  byId: Record<number, Announcement>;
  pinned: Announcement[];
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Params;
};

type AnnouncementsActions = {
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  fetchPinned: () => Promise<void>;
  setParams: (params: Params) => void;
  reset: () => void;
};

const initialState: AnnouncementsState = {
  items: [],
  count: 0,
  byId: {},
  pinned: [],
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
};

let listController: AbortController | null = null;

export const useAnnouncementsStore = create<AnnouncementsState & AnnouncementsActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchList: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await announcementsService.list(get().params, listController.signal);
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
          const data = await announcementsService.list({ id });
          const item = data.results[0];
          if (item) {
            set(state => ({
              byId: { ...state.byId, [id]: item },
              detailStatus: 'success',
            }));
          }
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ detailStatus: 'error', error: e.message ?? 'Error' });
        }
      },

      fetchPinned: async () => {
        try {
          const data = await announcementsService.pinned();
          set({ pinned: data });
        } catch {
          // non-critical; leave stale
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
    { name: 'AnnouncementsStore' }
  )
);
