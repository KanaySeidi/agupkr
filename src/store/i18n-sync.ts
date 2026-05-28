import i18n from '@/i18n';
import { useNewsStore } from './news.store';
import { useAnnouncementsStore } from './announcements.store';
import { useLibraryStore } from './library.store';
import { useStaffStore } from './staff.store';
import { useStructureStore } from './structure.store';
import { useContactsStore } from './contacts.store';
import { useScheduleStore } from './schedule.store';
import { useSiteStore } from './site.store';
import { useHonestyStore } from './honesty.store';
import { usePagesStore } from './pages.store';
import { useEducationStore } from './education.store';
import type { ProgramType } from '@/api/types';

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

    const staff = useStaffStore.getState();
    const hadCouncil = staff.status === 'success' || staff.council.length > 0;
    const hadProfessors = staff.professors.length > 0;
    staff.reset();
    if (hadCouncil) staff.fetchCouncil();
    if (hadProfessors) staff.fetchProfessors();

    const structure = useStructureStore.getState();
    const hadStructure = structure.status === 'success' || structure.items.length > 0;
    structure.reset();
    if (hadStructure) structure.fetchList();

    const contacts = useContactsStore.getState();
    const hadContacts = contacts.status === 'success' || contacts.items.length > 0;
    contacts.reset();
    if (hadContacts) contacts.fetchList();

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

    const honesty = useHonestyStore.getState();
    const hadHonesty = honesty.status === 'success' || honesty.items.length > 0;
    honesty.reset();
    if (hadHonesty) honesty.fetchList();

    const pages = usePagesStore.getState();
    pages.reset();
    if (pages.about !== null) pages.fetchAbout();
    if (pages.charter !== null) pages.fetchCharter();
    if (pages.logo !== null) pages.fetchLogo();
    if (pages.history !== null) pages.fetchHistory();
    if (pages.budgetPrograms.length > 0) pages.fetchBudgetPrograms();
    if (pages.cooperation !== null) pages.fetchCooperation();
    if (pages.bulletin !== null) pages.fetchBulletin();
    if (pages.legalExternal.length > 0) pages.fetchLegalExternal();
    if (pages.legalInternal.length > 0) pages.fetchLegalInternal();
    if (pages.qualityManagement !== null) pages.fetchQualityManagement();
    if (pages.tradeUnion !== null) pages.fetchTradeUnion();

    const edu = useEducationStore.getState();
    const hadAll = edu.allPrograms.length > 0;
    const loadedTypes = Object.keys(edu.programsByType) as ProgramType[];
    const hadDirections = edu.directions.length > 0;
    edu.reset();
    if (hadAll) edu.fetchAll();
    loadedTypes.forEach(type => edu.fetchByType(type));
    if (hadDirections) edu.fetchDirections();
  });
}
