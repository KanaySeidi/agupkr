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
  honesty: {
    list: '/academic-honesty/',
    detail: (id: number) => `/academic-honesty/${id}/`,
  },
  site: {
    mainPage: '/main-page/',
    settings: '/site-settings/',
    partners: '/partners/',
    socialLinks: '/social-links/',
  },
  pages: {
    aboutAcademy: '/about-academy/',
    charter: '/academy-charter/',
    logo: '/academy-logo/',
    history: '/academy-history/',
    budgetPrograms: '/budget-programs/',
    cooperation: '/international-cooperation/',
    bulletin: '/bulletin/',
    legalDocuments: '/legal-documents/',
    qualityManagement: '/quality-management/',
    tradeUnion: '/trade-union/',
  },
  education: {
    programs: '/education-programs/',
    directions: '/education-directions/',
  },
  surveys: {
    list: '/surveys/',
  },
  cms: {
    pages: '/pages/',
    pageDetail: (slug: string) => `/pages/${slug}/`,
    blocks: '/page-blocks/',
    blockDetail: (id: number) => `/page-blocks/${id}/`,
  },
} as const;
