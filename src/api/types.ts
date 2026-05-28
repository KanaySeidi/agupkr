export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type NewsPhoto = {
  id: number;
  photo: string;
  created_at: string;
};

export type News = {
  id: number;
  title: string;
  slug: string;
  description: string;
  photo: string | null;
  photo_url: string;
  is_pinned: boolean;
  is_event: boolean;
  date: string;
  photos: NewsPhoto[];
  created_at: string;
  updated_at: string;
};

export type Announcement = {
  id: number;
  title: string;
  description: string;
  is_pinned: boolean;
  date: string;
  created_at: string;
  updated_at: string;
};

export type LibraryResource = {
  id: number;
  category: number;
  category_name: string;
  title: string;
  description: string;
  photo: string | null;
  photo_url: string;
  link: string;
  file: string | null;
  file_url: string;
  created_at: string;
  updated_at: string;
};

export type LibraryCategory = {
  id: number;
  title: string;
  slug: string;
  order: number;
  resources: LibraryResource[];
  created_at: string;
  updated_at: string;
};

export type ContactDepartment = {
  id: number;
  department_type: 'reception' | 'academic' | 'programs';
  department_type_display: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type Contact = {
  id: number;
  title: string;
  description: string;
  photo: string | null;
  photo_url: string;
  email: string;
  phone: string;
  address: string;
  map_url: string;
  map_embed: string;
  departments: ContactDepartment[];
  created_at: string;
  updated_at: string;
};

export type AcademicCouncilFile = {
  id: number;
  title: string;
  file: string;
  file_url: string;
  created_at: string;
  updated_at: string;
};

export type AcademicCouncil = {
  id: number;
  title: string;
  composition: string;
  files: AcademicCouncilFile[];
  created_at: string;
  updated_at: string;
};

export type HonoraryProfessor = {
  id: number;
  name: string;
  photo: string | null;
  photo_url: string;
  description: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type Department = {
  id: number;
  name: string;
  description: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type OrganizationalStructure = {
  id: number;
  title: string;
  scheme: string | null;
  scheme_url: string;
  description: string;
  departments: Department[];
  created_at: string;
  updated_at: string;
};

export type ScheduleType =
  | 'bachelor'
  | 'master'
  | 'spo'
  | 'bells'
  | 'graph_pb'
  | 'graph_pm'
  | 'graph_pm_fhz';

export type Schedule = {
  id: number;
  title: string;
  schedule_type: ScheduleType;
  schedule_type_display: string;
  file: string;
  file_url: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type MainPage = {
  id: number;
  main_photo: string | null;
  main_photo_url: string;
  about_title: string;
  about_description: string;
  about_link: string;
  news: string;
  education_programs: string;
  created_at: string;
  updated_at: string;
};

export type SiteSettings = {
  id: number;
  news_title: string;
  announcements_title: string;
  library_title: string;
  library_link: string;
  created_at: string;
  updated_at: string;
};

export type Partner = {
  id: number;
  name: string;
  photo: string;
  photo_url: string;
  url: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type AcademicHonesty = {
  id: number;
  title: string;
  description: string;
  photo: string | null;
  photo_url: string;
  created_at: string;
  updated_at: string;
};

export type SocialLink = {
  id: number;
  name: string;
  url: string;
  icon: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type AboutAcademy = {
  id: number; title: string; main_photo_url: string;
  description: string; additional_description: string;
  block1_title: string; block1_description: string;
  block2_title: string; block2_description: string;
  mission_title: string; mission_description: string;
  photo_url: string; created_at: string; updated_at: string;
};
export type AcademyCharter = { id: number; title: string; description: string; file_url: string; created_at: string; updated_at: string; };
export type AcademyHistory = { id: number; title: string; description: string; file_url: string; created_at: string; updated_at: string; };
export type AcademyLogo = { id: number; title: string; description: string; logo_url: string; created_at: string; updated_at: string; };
export type BudgetProgram = { id: number; title: string; description: string; period: string; created_at: string; updated_at: string; };
export type InternationalCooperationLink = { id: number; title: string; url: string; created_at: string; updated_at: string; };
export type InternationalCooperation = { id: number; title: string; description: string; photo_url: string; links: InternationalCooperationLink[]; created_at: string; updated_at: string; };
export type BulletinFile = { id: number; title: string; file_url: string; created_at: string; updated_at: string; };
export type Bulletin = { id: number; title: string; description: string; files: BulletinFile[]; created_at: string; updated_at: string; };
export type LegalDocument = { id: number; title: string; document_type: 'external' | 'internal'; document_type_display: string; file_url: string; created_at: string; updated_at: string; };
export type QualityManagementFile = { id: number; title: string; file_url: string; created_at: string; updated_at: string; };
export type QualityManagement = { id: number; title: string; files: QualityManagementFile[]; created_at: string; updated_at: string; };
export type TradeUnion = { id: number; title: string; description: string; created_at: string; updated_at: string; };

export type ProgramType = 'bachelor' | 'master' | 'phd' | 'doctorate' | 'cppk' | 'spo';

export type EducationProgram = {
  id: number;
  title: string;
  program_type: ProgramType;
  program_type_display: string;
  description: string;
  link: string;
  photo_url: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type EducationDirection = {
  id: number;
  title: string;
  description: string;
  link: string;
  photo_url: string;
  created_at: string;
  updated_at: string;
};

export type Survey = {
  id: number;
  title: string;
  description: string;
  link: string;
  created_at: string;
  updated_at: string;
};
