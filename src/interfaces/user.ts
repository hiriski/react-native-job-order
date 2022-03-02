import { LaravelPaginationLinks, LaravelPaginationMeta } from './laravel-pagination';
import { Role } from '@app/interfaces/role';

export interface User {
  id: number;
  name: string;
  email: string;
  photo_url?: string;
  role?: Role;
  gender?: string;
  phone_number?: string;
  about?: string;
  status: string;
  created_at: Date | string;
}

export interface UserModel extends Omit<User, 'id' | 'created_at' | 'role' | 'status'> {
  role_id: number;
  password: string;
}

export interface ResponseListUser {
  data: User[];
  links: LaravelPaginationLinks;
  meta: LaravelPaginationMeta;
}
