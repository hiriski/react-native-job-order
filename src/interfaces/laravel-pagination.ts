interface LaravelPaginationMetaLink {
  url: string;
  label: string;
  active: boolean;
}

export interface LaravelPaginationLinks {
  first: string;
  last: string;
  next?: string | null;
  prev?: string | null;
}

export interface LaravelPaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: LaravelPaginationMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}
