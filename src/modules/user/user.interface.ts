import { ILaravelPaginationLinks, ILaravelPaginationMeta } from '@/interfaces/pagination';
import { UUID } from '../common/common.interface';
import { IRole } from '../role/role.interface';

export interface IUser {
  id: UUID;
  name: string;
  email: string;
  photo_url?: string;
  role_id: number;
  role?: IRole;
  gender?: string;
  phone_number?: string;
  about?: string;
  status: string;
  avatar_text_color: string;
  created_at: Date | string;
}

export type TCreateUser = Omit<IUser, 'id' | 'created_at' | 'role' | 'status'> & { role_id: number; password: string };

export type TResponseListUser = {
  data: IUser[];
  meta?: ILaravelPaginationMeta;
  links: ILaravelPaginationLinks;
};
