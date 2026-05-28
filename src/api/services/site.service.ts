import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { MainPage, Paginated, Partner, SiteSettings, SocialLink, Survey } from '@/api/types';

export const siteService = {
  mainPage() {
    return api.get<Paginated<MainPage>>(ENDPOINTS.site.mainPage).then(r => r.data);
  },

  settings() {
    return api.get<Paginated<SiteSettings>>(ENDPOINTS.site.settings).then(r => r.data);
  },

  partners() {
    return api.get<Paginated<Partner>>(ENDPOINTS.site.partners).then(r => r.data);
  },

  socialLinks() {
    return api.get<Paginated<SocialLink>>(ENDPOINTS.site.socialLinks).then(r => r.data);
  },

  surveys(signal?: AbortSignal) {
    return api.get<Paginated<Survey>>(ENDPOINTS.surveys.list, { signal }).then(r => r.data);
  },
};
