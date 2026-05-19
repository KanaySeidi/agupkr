export const ENDPOINTS = {
  news: {
    list: '/news/',
    detail: (id: number) => `/news/${id}/`,
    events: '/news/events/',
    pinned: '/news/pinned/',
  },
  announcements: {
    list: '/announcements/',
    pinned: '/announcements/pinned/',
    detail: (id: number) => `/announcements/${id}/`,
  },
  library: {
    categories: '/library-categories/',
    categoryDetail: (id: number) => `/library-categories/${id}/`,
    resources: '/library-resources/',
    resourceDetail: (id: number) => `/library-resources/${id}/`,
  },
  staff: {
    council: '/academic-council/',
    councilDetail: (id: number) => `/academic-council/${id}/`,
    councilFiles: '/academic-council-files/',
    professors: '/honorary-professors/',
    professorDetail: (id: number) => `/honorary-professors/${id}/`,
  },
  structure: {
    list: '/organizational-structure/',
    detail: (id: number) => `/organizational-structure/${id}/`,
    departments: '/departments/',
  },
  contacts: {
    list: '/contacts/',
    detail: (id: number) => `/contacts/${id}/`,
    departments: '/contact-departments/',
  },
  schedule: {
    list: '/schedules/',
    detail: (id: number) => `/schedules/${id}/`,
  },
  site: {
    mainPage: '/main-page/',
    settings: '/site-settings/',
    partners: '/partners/',
    socialLinks: '/social-links/',
  },
} as const;
