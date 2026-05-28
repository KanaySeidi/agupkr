import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type {
  AboutAcademy,
  AcademyCharter,
  AcademyHistory,
  AcademyLogo,
  BudgetProgram,
  Bulletin,
  InternationalCooperation,
  LegalDocument,
  Paginated,
  QualityManagement,
  TradeUnion,
} from '@/api/types';

async function firstResult<T>(url: string, signal?: AbortSignal): Promise<T | null> {
  const r = await api.get<Paginated<T>>(url, { signal });
  return r.data.results[0] ?? null;
}

export const pagesService = {
  aboutAcademy(signal?: AbortSignal) {
    return firstResult<AboutAcademy>(ENDPOINTS.pages.aboutAcademy, signal);
  },

  charter(signal?: AbortSignal) {
    return firstResult<AcademyCharter>(ENDPOINTS.pages.charter, signal);
  },

  logo(signal?: AbortSignal) {
    return firstResult<AcademyLogo>(ENDPOINTS.pages.logo, signal);
  },

  history(signal?: AbortSignal) {
    return firstResult<AcademyHistory>(ENDPOINTS.pages.history, signal);
  },

  budgetPrograms(params?: Record<string, unknown>, signal?: AbortSignal) {
    return api
      .get<Paginated<BudgetProgram>>(ENDPOINTS.pages.budgetPrograms, { params, signal })
      .then(r => r.data);
  },

  cooperation(signal?: AbortSignal) {
    return api
      .get<Paginated<InternationalCooperation>>(ENDPOINTS.pages.cooperation, { signal })
      .then(r => r.data.results);
  },

  bulletin(signal?: AbortSignal) {
    return firstResult<Bulletin>(ENDPOINTS.pages.bulletin, signal);
  },

  legalDocuments(documentType: 'external' | 'internal', signal?: AbortSignal) {
    return api
      .get<Paginated<LegalDocument>>(ENDPOINTS.pages.legalDocuments, {
        params: { document_type: documentType },
        signal,
      })
      .then(r => r.data);
  },

  qualityManagement(signal?: AbortSignal) {
    return firstResult<QualityManagement>(ENDPOINTS.pages.qualityManagement, signal);
  },

  tradeUnion(signal?: AbortSignal) {
    return firstResult<TradeUnion>(ENDPOINTS.pages.tradeUnion, signal);
  },
};
