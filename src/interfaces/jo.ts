import { LaravelPaginationLinks, LaravelPaginationMeta } from '@/interfaces/laravel-pagination';
import { Image } from './image';
import { User } from './user';
import { Customer, CustomerModel } from '@/interfaces/customer';

export type JoUser = Partial<User>;

export interface JoCategory {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
}

export interface JoProductionStatus {
  id: number;
  name: string;
  description?: string;
}

export type ProductionStatus = JoProductionStatus;

export type PaymentStatus = {
  id: number;
  name: string;
  description?: string;
};

export interface JoNotes {
  id: number;
  body: string;
  user: JoUser;
  created_at: string | Date;
}

export type Jo = {
  id: string;
  order_number: string;
  title: string;
  order_date: string | Date;
  body: string;
  quantity: number;
  notes: JoNotes[];
  user: JoUser;
  invoices?: any;
  category: JoCategory;
  production_status: JoProductionStatus;
  total: number;
  due_date: string | Date;
  payment_status: PaymentStatus;
  customer?: Customer;
  percentage_progress: number;
  images?: Image[];
  price: number;
};

export interface JoModel {
  title: string;
  order_date: string | Date;
  notes?: string;
  body?: string;
  category_id: number;
  payment_status_id?: number;
  payment_method_id?: number;
  customer_id?: Customer | number;
  customer?: CustomerModel;
  is_nullable_customer?: boolean;
  material_paper_id?: number;
  other_material_paper?: string;
  length_in_invoice: number;
  width_in_invoice: number;
  length_in_production: number;
  width_in_production: number;
  quantity: number;
  price: number;
  tax?: number;
  dp?: number;
  additional_price_name?: string;
  additional_price?: number;
  due_date: string | Date;
  image?: string;
}

export interface JoInvoiceItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
  notes?: string;
  discount?: number;
}

export interface JoInvoiceData {
  bill_to_name: string;
  bill_to_phone_number?: string | null;
  bill_to_address?: string | null;
  invoice_date?: string | Date | null;
  invoice_due_date?: string | Date | null;
  tax?: number;
  notes?: string;
  items: JoInvoiceItem[];
  is_multiple_customer: boolean;
  multiple_customer_info?: Customer[];
}

export type ResponseListJo = {
  data: Jo[];
  meta?: LaravelPaginationMeta;
  links?: LaravelPaginationLinks;
};

export interface ColorStatusJo {
  color: string;
  backgroundColor: string;
}
