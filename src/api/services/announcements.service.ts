import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { Announcement, Paginated } from '@/api/types';

export const announcementsService = {
  list(params?: Record<string, unknown>, signal?: AbortSignal) {
    return api
      .get<Paginated<Announcement>>(ENDPOINTS.announcements.list, { params, signal })
      .then(r => r.data);
  },

  pinned(signal?: AbortSignal) {
    return api
      .get<Announcement[]>(ENDPOINTS.announcements.pinned, { signal })
      .then(r => r.data);
  },
};
