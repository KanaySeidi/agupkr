import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { educationService } from '@/api/services/education.service';
import type { EducationProgram, EducationDirection, ProgramType } from '@/api/types';

type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

type EducationState = {
  allPrograms: EducationProgram[];
  programsByType: Partial<Record<ProgramType, EducationProgram[]>>;
  directions: EducationDirection[];
  status: Record<string, FetchStatus>;
  error: Record<string, string | null>;
};

type EducationActions = {
  fetchAll: () => Promise<void>;
  fetchByType: (type: ProgramType) => Promise<void>;
  fetchDirections: () => Promise<void>;
  reset: () => void;
};

const initialState: EducationState = {
  allPrograms: [],
  programsByType: {},
  directions: [],
  status: {},
  error: {},
};

const controllers: Record<string, AbortController> = {};

export const useEducationStore = create<EducationState & EducationActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchAll: async () => {
        const key = 'all';
        controllers[key]?.abort();
        controllers[key] = new AbortController();
        set(state => ({
          status: { ...state.status, [key]: 'loading' },
          error: { ...state.error, [key]: null },
        }));
        try {
          const data = await educationService.programs(undefined, controllers[key].signal);
          set(state => ({
            allPrograms: data.results,
            status: { ...state.status, [key]: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            const e = err as { message?: string };
            set(state => ({
              status: { ...state.status, [key]: 'error' },
              error: { ...state.error, [key]: e.message ?? 'Error' },
            }));
          }
        }
      },

      fetchByType: async (type: ProgramType) => {
        const existing = get().programsByType[type];
        if (existing && existing.length > 0) return;

        const key = type;
        controllers[key]?.abort();
        controllers[key] = new AbortController();
        set(state => ({
          status: { ...state.status, [key]: 'loading' },
          error: { ...state.error, [key]: null },
        }));
        try {
          const data = await educationService.programs(type, controllers[key].signal);
          set(state => ({
            programsByType: { ...state.programsByType, [type]: data.results },
            status: { ...state.status, [key]: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            const e = err as { message?: string };
            set(state => ({
              status: { ...state.status, [key]: 'error' },
              error: { ...state.error, [key]: e.message ?? 'Error' },
            }));
          }
        }
      },

      fetchDirections: async () => {
        const key = 'directions';
        controllers[key]?.abort();
        controllers[key] = new AbortController();
        set(state => ({
          status: { ...state.status, [key]: 'loading' },
          error: { ...state.error, [key]: null },
        }));
        try {
          const data = await educationService.directions(controllers[key].signal);
          set(state => ({
            directions: data.results,
            status: { ...state.status, [key]: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            const e = err as { message?: string };
            set(state => ({
              status: { ...state.status, [key]: 'error' },
              error: { ...state.error, [key]: e.message ?? 'Error' },
            }));
          }
        }
      },

      reset: () => {
        Object.values(controllers).forEach(c => c.abort());
        Object.keys(controllers).forEach(k => delete controllers[k]);
        set(initialState);
      },
    }),
    { name: 'EducationStore' }
  )
);
