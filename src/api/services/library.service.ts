import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { LibraryCategory, LibraryResource, Paginated } from '@/api/types';

export const libraryService = {
  listCategories(signal?: AbortSignal) {
    return api
      .get<Paginated<LibraryCategory>>(ENDPOINTS.library.categories, { signal })
      .then(r => r.data);
  },

  listResources(params?: Record<string, unknown>, signal?: AbortSignal) {
    return api
      .get<Paginated<LibraryResource>>(ENDPOINTS.library.resources, { params, signal })
      .then(r => r.data);
  },

  getResource(id: number) {
    return api.get<LibraryResource>(ENDPOINTS.library.resourceDetail(id)).then(r => r.data);
  },
};
