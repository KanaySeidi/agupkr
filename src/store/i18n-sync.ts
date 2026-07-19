import i18n from '@/i18n';
import { useNewsStore } from './news.store';
import { useAnnouncementsStore } from './announcements.store';
import { useLibraryStore } from './library.store';
import { useScheduleStore } from './schedule.store';
import { useSiteStore } from './site.store';
import { useCmsStore } from './cms.store';

let initialized = false;

export function setupLanguageSync() {
  if (initialized) return;
  initialized = true;

  i18n.on('languageChanged', () => {
    const news = useNewsStore.getState();
    const hadNewsList = news.status === 'success' || news.items.length > 0;
    const hadNewsEvents = news.events.length > 0;
    const hadNewsPinned = news.pinned.length > 0;
    news.reset();
    if (hadNewsList) news.fetchList();
    if (hadNewsEvents) news.fetchEvents();
    if (hadNewsPinned) news.fetchPinned();

    const ann = useAnnouncementsStore.getState();
    const hadAnnList = ann.status === 'success' || ann.items.length > 0;
    const hadAnnPinned = ann.pinned.length > 0;
    ann.reset();
    if (hadAnnList) ann.fetchList();
    if (hadAnnPinned) ann.fetchPinned();

    const lib = useLibraryStore.getState();
    const hadLibCategories = lib.categoriesStatus === 'success' || lib.categories.length > 0;
    const hadLibList = lib.status === 'success' || lib.items.length > 0;
    lib.reset();
    if (hadLibCategories) lib.fetchCategories();
    if (hadLibList) lib.fetchList();

    const schedule = useScheduleStore.getState();
    const hadSchedule = schedule.status === 'success' || schedule.items.length > 0;
    schedule.reset();
    if (hadSchedule) schedule.fetchList();

    const site = useSiteStore.getState();
    const hadMainPage = site.status === 'success' || site.mainPage !== null;
    const hadSettings = site.settings !== null;
    const hadPartners = site.partners.length > 0;
    const hadSocialLinks = site.socialLinks.length > 0;
    const hadSurveys = site.surveys.length > 0;
    site.reset();
    if (hadMainPage) site.fetchMainPage();
    if (hadSettings) site.fetchSettings();
    if (hadPartners) site.fetchPartners();
    if (hadSocialLinks) site.fetchSocialLinks();
    if (hadSurveys) site.fetchSurveys();

    useCmsStore.getState().reset();
  });
}
