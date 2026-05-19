import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { Paginated, Schedule, ScheduleType } from '@/api/types';

export const scheduleService = {
  list(scheduleType?: ScheduleType, signal?: AbortSignal) {
    const params = scheduleType ? { schedule_type: scheduleType } : undefined;
    return api
      .get<Paginated<Schedule>>(ENDPOINTS.schedule.list, { params, signal })
      .then(r => r.data);
  },
};
