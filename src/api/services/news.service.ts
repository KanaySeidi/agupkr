import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { News, Paginated } from '@/api/types';

export const newsService = {
  list(params?: Record<string, unknown>, signal?: AbortSignal) {
    return api.get<Paginated<News>>(ENDPOINTS.news.list, { params, signal }).then(r => r.data);
  },

  getById(id: number) {
    return api.get<News>(ENDPOINTS.news.detail(id)).then(r => r.data);
  },

  events(signal?: AbortSignal) {
    return api.get<News[]>(ENDPOINTS.news.events, { signal }).then(r => r.data);
  },

  pinned(signal?: AbortSignal) {
    return api.get<News[]>(ENDPOINTS.news.pinned, { signal }).then(r => r.data);
  },
};
