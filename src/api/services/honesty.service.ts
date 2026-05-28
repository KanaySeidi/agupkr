import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { AcademicHonesty, Paginated } from '@/api/types';

export const honestyService = {
  list(signal?: AbortSignal) {
    return api
      .get<Paginated<AcademicHonesty>>(ENDPOINTS.honesty.list, { signal })
      .then(r => r.data);
  },
};
