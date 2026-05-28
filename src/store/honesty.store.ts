import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { honestyService } from '@/api/services/honesty.service';
import type { AcademicHonesty } from '@/api/types';

type Status = 'idle' | 'loading' | 'success' | 'error';

type HonestyState = {
  items: AcademicHonesty[];
  count: number;
  status: Status;
  error: string | null;
};

type HonestyActions = {
  fetchList: () => Promise<void>;
  reset: () => void;
};

const initialState: HonestyState = {
  items: [],
  count: 0,
  status: 'idle',
  error: null,
};

let listController: AbortController | null = null;

export const useHonestyStore = create<HonestyState & HonestyActions>()(
  devtools(
    (set) => ({
      ...initialState,

      fetchList: async () => {
        listController?.abort();
        listController = new AbortController();
        set({ status: 'loading', error: null });
        try {
          const data = await honestyService.list(listController.signal);
          set({ items: data.results, count: data.count, status: 'success' });
        } catch (err: unknown) {
          if ((err as Error).name === 'CanceledError') return;
          const e = err as { message?: string };
          set({ status: 'error', error: e.message ?? 'Error' });
        }
      },

      reset: () => {
        listController?.abort();
        listController = null;
        set(initialState);
      },
    }),
    { name: 'HonestyStore' }
  )
);
