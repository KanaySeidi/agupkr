import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { OrganizationalStructure, Paginated } from '@/api/types';

export const structureService = {
  list(signal?: AbortSignal) {
    return api
      .get<Paginated<OrganizationalStructure>>(ENDPOINTS.structure.list, { signal })
      .then(r => r.data);
  },
};
