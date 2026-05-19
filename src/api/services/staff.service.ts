import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { AcademicCouncil, HonoraryProfessor, Paginated } from '@/api/types';

export const staffService = {
  listCouncil(signal?: AbortSignal) {
    return api
      .get<Paginated<AcademicCouncil>>(ENDPOINTS.staff.council, { signal })
      .then(r => r.data);
  },

  listProfessors(signal?: AbortSignal) {
    return api
      .get<Paginated<HonoraryProfessor>>(ENDPOINTS.staff.professors, { signal })
      .then(r => r.data);
  },
};
