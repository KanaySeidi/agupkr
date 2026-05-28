import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { pagesService } from '@/api/services/pages.service';
import type {
  AboutAcademy,
  AcademyCharter,
  AcademyHistory,
  AcademyLogo,
  BudgetProgram,
  Bulletin,
  InternationalCooperation,
  LegalDocument,
  QualityManagement,
  TradeUnion,
} from '@/api/types';

type SectionStatus = 'idle' | 'loading' | 'success' | 'error';

type PagesState = {
  about: AboutAcademy | null;
  charter: AcademyCharter | null;
  logo: AcademyLogo | null;
  history: AcademyHistory | null;
  budgetPrograms: BudgetProgram[];
  budgetCount: number;
  cooperation: InternationalCooperation[];
  bulletin: Bulletin | null;
  legalExternal: LegalDocument[];
  legalInternal: LegalDocument[];
  qualityManagement: QualityManagement | null;
  tradeUnion: TradeUnion | null;
  status: Record<string, SectionStatus>;
  error: Record<string, string | null>;
};

type PagesActions = {
  fetchAbout(): Promise<void>;
  fetchCharter(): Promise<void>;
  fetchLogo(): Promise<void>;
  fetchHistory(): Promise<void>;
  fetchBudgetPrograms(): Promise<void>;
  fetchCooperation(): Promise<void>;
  fetchBulletin(): Promise<void>;
  fetchLegalExternal(): Promise<void>;
  fetchLegalInternal(): Promise<void>;
  fetchQualityManagement(): Promise<void>;
  fetchTradeUnion(): Promise<void>;
  reset(): void;
};

const initialStatus: Record<string, SectionStatus> = {
  about: 'idle',
  charter: 'idle',
  logo: 'idle',
  history: 'idle',
  budget: 'idle',
  cooperation: 'idle',
  bulletin: 'idle',
  legalExternal: 'idle',
  legalInternal: 'idle',
  quality: 'idle',
  union: 'idle',
};

const initialError: Record<string, string | null> = {
  about: null,
  charter: null,
  logo: null,
  history: null,
  budget: null,
  cooperation: null,
  bulletin: null,
  legalExternal: null,
  legalInternal: null,
  quality: null,
  union: null,
};

const initialState: PagesState = {
  about: null,
  charter: null,
  logo: null,
  history: null,
  budgetPrograms: [],
  budgetCount: 0,
  cooperation: [],
  bulletin: null,
  legalExternal: [],
  legalInternal: [],
  qualityManagement: null,
  tradeUnion: null,
  status: { ...initialStatus },
  error: { ...initialError },
};

const controllers: Record<string, AbortController | null> = {
  about: null,
  charter: null,
  logo: null,
  history: null,
  budget: null,
  cooperation: null,
  bulletin: null,
  legalExternal: null,
  legalInternal: null,
  quality: null,
  union: null,
};

function setSection(
  set: (fn: (s: PagesState) => Partial<PagesState>) => void,
  key: string,
  status: SectionStatus,
  errMsg?: string
) {
  set(s => ({
    status: { ...s.status, [key]: status },
    error: { ...s.error, [key]: errMsg ?? null },
  }));
}

export const usePagesStore = create<PagesState & PagesActions>()(
  devtools(
    (set) => ({
      ...initialState,

      fetchAbout: async () => {
        controllers.about?.abort();
        controllers.about = new AbortController();
        setSection(set, 'about', 'loading');
        try {
          const data = await pagesService.aboutAcademy(controllers.about.signal);
          set(s => ({ about: data, status: { ...s.status, about: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'about', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchCharter: async () => {
        controllers.charter?.abort();
        controllers.charter = new AbortController();
        setSection(set, 'charter', 'loading');
        try {
          const data = await pagesService.charter(controllers.charter.signal);
          set(s => ({ charter: data, status: { ...s.status, charter: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'charter', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchLogo: async () => {
        controllers.logo?.abort();
        controllers.logo = new AbortController();
        setSection(set, 'logo', 'loading');
        try {
          const data = await pagesService.logo(controllers.logo.signal);
          set(s => ({ logo: data, status: { ...s.status, logo: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'logo', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchHistory: async () => {
        controllers.history?.abort();
        controllers.history = new AbortController();
        setSection(set, 'history', 'loading');
        try {
          const data = await pagesService.history(controllers.history.signal);
          set(s => ({ history: data, status: { ...s.status, history: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'history', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchBudgetPrograms: async () => {
        controllers.budget?.abort();
        controllers.budget = new AbortController();
        setSection(set, 'budget', 'loading');
        try {
          const data = await pagesService.budgetPrograms({}, controllers.budget.signal);
          set(s => ({
            budgetPrograms: data.results,
            budgetCount: data.count,
            status: { ...s.status, budget: 'success' },
          }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'budget', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchCooperation: async () => {
        controllers.cooperation?.abort();
        controllers.cooperation = new AbortController();
        setSection(set, 'cooperation', 'loading');
        try {
          const data = await pagesService.cooperation(controllers.cooperation.signal);
          set(s => ({ cooperation: data ?? [], status: { ...s.status, cooperation: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'cooperation', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchBulletin: async () => {
        controllers.bulletin?.abort();
        controllers.bulletin = new AbortController();
        setSection(set, 'bulletin', 'loading');
        try {
          const data = await pagesService.bulletin(controllers.bulletin.signal);
          set(s => ({ bulletin: data, status: { ...s.status, bulletin: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'bulletin', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchLegalExternal: async () => {
        controllers.legalExternal?.abort();
        controllers.legalExternal = new AbortController();
        setSection(set, 'legalExternal', 'loading');
        try {
          const data = await pagesService.legalDocuments('external', controllers.legalExternal.signal);
          set(s => ({ legalExternal: data.results, status: { ...s.status, legalExternal: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'legalExternal', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchLegalInternal: async () => {
        controllers.legalInternal?.abort();
        controllers.legalInternal = new AbortController();
        setSection(set, 'legalInternal', 'loading');
        try {
          const data = await pagesService.legalDocuments('internal', controllers.legalInternal.signal);
          set(s => ({ legalInternal: data.results, status: { ...s.status, legalInternal: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'legalInternal', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchQualityManagement: async () => {
        controllers.quality?.abort();
        controllers.quality = new AbortController();
        setSection(set, 'quality', 'loading');
        try {
          const data = await pagesService.qualityManagement(controllers.quality.signal);
          set(s => ({ qualityManagement: data, status: { ...s.status, quality: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'quality', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      fetchTradeUnion: async () => {
        controllers.union?.abort();
        controllers.union = new AbortController();
        setSection(set, 'union', 'loading');
        try {
          const data = await pagesService.tradeUnion(controllers.union.signal);
          set(s => ({ tradeUnion: data, status: { ...s.status, union: 'success' } }));
        } catch (err: unknown) {
          if ((err as Error).name !== 'CanceledError') {
            setSection(set, 'union', 'error', (err as { message?: string }).message ?? 'Error');
          }
        }
      },

      reset: () => {
        Object.keys(controllers).forEach(k => {
          controllers[k]?.abort();
          controllers[k] = null;
        });
        set(initialState);
      },
    }),
    { name: 'PagesStore' }
  )
);
