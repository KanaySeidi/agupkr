import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { EducationProgram, EducationDirection, ProgramType, Paginated } from '@/api/types';

export const educationService = {
  programs(programType?: ProgramType, signal?: AbortSignal) {
    return api
      .get<Paginated<EducationProgram>>(ENDPOINTS.education.programs, {
        params: programType ? { program_type: programType } : {},
        signal,
      })
      .then(r => r.data);
  },
  directions(signal?: AbortSignal) {
    return api
      .get<Paginated<EducationDirection>>(ENDPOINTS.education.directions, { signal })
      .then(r => r.data);
  },
};
