import { LaravelPaginationLinks, LaravelPaginationMeta } from '@/interfaces/laravel-pagination';
import { IImage } from '../image/image.interface';
import { ITag } from '../tag/tag.interface';
import { IUser } from '../user/user.interface';

export interface IProductCategory {
  id: number;
  name: string;
  icon?: string;
  description?: string;
}

export interface IProduct {
  id: string;
  slug: string;
  title: string;
  description?: string;
  body?: string;
  user: IUser;
  images?: Array<IImage>;
  status: 'active' | 'inactive' | 'draft';
  category: IProductCategory;
  tags: Array<ITag>;
}

export interface IResponseProductList {
  data: Array<IProduct>;
  meta?: LaravelPaginationMeta;
  links: LaravelPaginationLinks;
}
