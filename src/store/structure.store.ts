import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { structureService } from '@/api/services/structure.service';
import type { OrganizationalStructure } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type StructureState = {
  items: OrganizationalStructure[];
  count: number;
  byId: Record<number, OrganizationalStructure>;
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Record<string, unknown>;
};

type StructureActions = {
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  setParams: (params: Record<string, unknown>) => void;
  reset: () => void;
};

const initialState: StructureState = {
  items: [],
  count: 0,
  byId: {},
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
};

let listController: AbortController | null = null;

export const useStructureStore = create<StructureState & StructureActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchList: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await structureService.list(listController.signal);
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
          const found = get().items.find(i => i.id === id);
          if (found) {
            set(state => ({ byId: { ...state.byId, [id]: found }, detailStatus: 'success' }));
            return;
          }
          set({ detailStatus: 'error', error: 'Not found' });
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ detailStatus: 'error', error: e.message ?? 'Error' });
        }
      },

      setParams: (params: Record<string, unknown>) => {
        set({ params });
        get().fetchList();
      },

      reset: () => {
        listController?.abort();
        listController = null;
        set(initialState);
      },
    }),
    { name: 'StructureStore' }
  )
);
