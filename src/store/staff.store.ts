import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { staffService } from '@/api/services/staff.service';
import type { AcademicCouncil, HonoraryProfessor } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type StaffState = {
  council: AcademicCouncil[];
  councilCount: number;
  professors: HonoraryProfessor[];
  professorsCount: number;
  byId: Record<number, AcademicCouncil>;
  status: Status;
  detailStatus: Status;
  error: string | null;
  params: Record<string, unknown>;
};

type StaffActions = {
  fetchList: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  setParams: (params: Record<string, unknown>) => void;
  fetchCouncil: () => Promise<void>;
  fetchProfessors: () => Promise<void>;
  reset: () => void;
};

const initialState: StaffState = {
  council: [],
  councilCount: 0,
  professors: [],
  professorsCount: 0,
  byId: {},
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  params: {},
};

let listController: AbortController | null = null;

export const useStaffStore = create<StaffState & StaffActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchList: async () => {
        get().fetchCouncil();
        get().fetchProfessors();
      },

      fetchById: async (id: number) => {
        if (get().byId[id]) return;
        set({ detailStatus: 'loading', error: null });
        try {
          const found = get().council.find(c => c.id === id);
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

      fetchCouncil: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await staffService.listCouncil(listController.signal);
          set({ council: data.results, councilCount: data.count, status: 'success' });
        } catch (err: unknown) {
          if ((err as { status?: number }).status !== undefined || (err as Error).name !== 'CanceledError') {
            const e = err as { message?: string };
            set({ status: 'error', error: e.message ?? 'Error' });
          }
        }
      },

      fetchProfessors: async () => {
        try {
          const data = await staffService.listProfessors();
          set({ professors: data.results, professorsCount: data.count });
        } catch (err: unknown) {
          const e = err as { message?: string };
          set({ error: e.message ?? 'Error' });
        }
      },

      reset: () => {
        listController?.abort();
        listController = null;
        set(initialState);
      },
    }),
    { name: 'StaffStore' }
  )
);
