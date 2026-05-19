import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { Contact, Paginated } from '@/api/types';

export const contactsService = {
  list(signal?: AbortSignal) {
    return api
      .get<Paginated<Contact>>(ENDPOINTS.contacts.list, { signal })
      .then(r => r.data);
  },
};
