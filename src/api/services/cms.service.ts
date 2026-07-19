import { api } from '@/api/client';
import { ENDPOINTS } from '@/api/endpoints';
import type { AdminPage, AdminPageList, PageBlock, PageGroup, BlockType, Paginated } from '@/api/types';

type PagesParams = {
  group?: PageGroup;
  parent?: number;
  is_development?: boolean;
  search?: string;
  ordering?: string;
  page?: number;
};

type BlocksParams = {
  page_id?: number;
  block_type?: BlockType;
  search?: string;
  ordering?: string;
  page?: number;
};

export const cmsService = {
  getPages(params?: PagesParams, signal?: AbortSignal) {
    return api
      .get<Paginated<AdminPageList>>(ENDPOINTS.cms.pages, { params, signal })
      .then(r => r.data);
  },

  getPagesByGroup(group: PageGroup, signal?: AbortSignal) {
    return api
      .get<Paginated<AdminPageList>>(ENDPOINTS.cms.pages, { params: { group }, signal })
      .then(r => r.data.results);
  },

  getPage(slug: string, signal?: AbortSignal) {
    return api
      .get<AdminPage>(ENDPOINTS.cms.pageDetail(slug), { signal })
      .then(r => r.data);
  },

  getBlocks(params?: BlocksParams, signal?: AbortSignal) {
    return api
      .get<Paginated<PageBlock>>(ENDPOINTS.cms.blocks, { params, signal })
      .then(r => r.data);
  },

  getBlocksByPage(pageId: number, signal?: AbortSignal) {
    return api
      .get<Paginated<PageBlock>>(ENDPOINTS.cms.blocks, {
        params: { page_id: pageId },
        signal,
      })
      .then(r => r.data.results);
  },
};
