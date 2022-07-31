export interface ILaravelPaginationMetaLink {
  url: string;
  label: string;
  active: boolean;
}

export interface ILaravelPaginationLinks {
  first: string;
  last: string;
  next?: string | null;
  prev?: string | null;
}

export interface ILaravelPaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: ILaravelPaginationMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IResponseWithPagination {
  meta?: ILaravelPaginationMeta;
  links: ILaravelPaginationLinks;
}
