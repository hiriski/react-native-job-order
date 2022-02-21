import type { LaravelPaginationLinks, LaravelPaginationMeta } from './laravel-pagination';

export interface Customer {
  id: number;
  name: string;
  phone_number?: string;
  email?: string;
  address?: string;
  notes?: string;
};

export type ResponseListCustomer = {
  data: Array<Customer>;
  meta?: LaravelPaginationMeta;
  links: LaravelPaginationLinks;
};

export type CustomerModel = Omit<Customer, 'id'>;
