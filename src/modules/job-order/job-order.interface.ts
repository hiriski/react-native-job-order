import { UUID } from '@/interfaces/common.interface';
import { IAddress } from '../address/address.interface';
import { IComment } from '../comment/comment.interface';
import { CustomerType, ICustomer } from '../customer/customer.interface';
import { IImage } from '../image/image.interface';
import { IInvoice } from '../invoice/invoice.interface';
import { IMachine } from '../machine/machine.interface';
import { INote } from '../note/note.interface';
import { IProduct } from '../product/product.interface';
import { ITransaction, ITransactionAdditionalCost } from '../transaction/transaction.interface';
import { IUser } from '../user/user.interface';
import { IMaterial } from '../warehouse/warehouse.interface';
import { JobOrderProductionStatusIdConstants } from './job-order.constant';

// import { IAddress } from './address';
// import { JobOrderProductionStatusIdConstants } from '@/constants';
// import { ITransaction, ITransactionAdditionalCost } from './transaction';
// import { IInvoice } from './invoice';

export type TJobOrderUser = Partial<IUser>;

export interface IJobOrderCategory {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  is_initial: boolean;
}

export interface IJobOrderProductionStatus {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_initial: boolean;
}

export interface IPaymentStatus {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_initial: boolean;
}

export interface IPaymentMethod {
  id: number;
  name: string;
  description?: string;
  status: 'active' | 'inactive';
  image?: string;
  is_initial: boolean;
}
export interface IBankAccount {
  id: number;
  name: string;
  account_name: string;
  account_number: string;
  is_active: boolean;
  image_url?: string;
  is_initial: boolean;
}

export type TJoNotes = {
  id: number;
  body: string;
  user: Partial<IUser>;
  created_at: string | Date;
};

export interface IJobOrderStatus {
  id: number;
  name: string;
  description: string;
  is_initial: boolean;
}

// This is data with Pivot table
export interface IPivotJobOrderMaterial
  extends Pick<IMaterial, 'name' | 'description' | 'image_url' | 'status' | 'unit'> {
  usage: {
    quantity_material_pcs?: number | null;
    quantity_material_sheet?: number | null;
    dimension_material_length?: number | null;
    dimension_material_width?: number | null;
    job_order_id: UUID;
    material_id: number;
  };
}

export interface IJobOrder {
  id: UUID;
  created_by: IUser;
  updated_by?: IUser['id'] | null;
  updated_by_user_id: IUser['id'];
  product_id?: IProduct['id'];
  product?: IProduct | null;
  customer?: ICustomer | null;
  customer_id?: ICustomer['id'] | null;
  status: IJobOrderStatus;
  status_id: IJobOrderStatus['id'];
  category: IJobOrderCategory;
  category_id: IJobOrderCategory['id'];
  production_status: IJobOrderProductionStatus;
  production_status_id: IJobOrderProductionStatus['id'];
  is_ready_to_production: boolean;
  title: string;
  order_number: string;
  order_date: string;
  due_date: string;
  body?: string | null;
  order_quantity: number;
  order_price: number;
  total_order: number;
  rejected_by?: IUser;
  reason_rejected?: string | null;
  is_approved: boolean;
  percentage_progress: number;
  progress_by?: IUser;
  notes: Array<INote>;
  attachments: Array<string>;
  materials: Array<IPivotJobOrderMaterial>;
  machines: Array<IMachine>;
  images: Array<IImage>;
  comments: Array<IComment>;
  transaction: ITransaction;
  invoices: Array<IInvoice>;
  is_pinned: boolean;
  start_production_at?: string | null;
  finish_production_at?: string | null;
  rejected_production_at?: IUser | null;
  qr?: string | null;
  created_at: string;
  updated_at: string;
}

export interface IRequestBodyJobOrderMaterial {
  material_id: number;
  dimension_material_length?: number;
  dimension_material_width?: number;
  quantity_material_pcs?: number;
  quantity_material_sheet?: number;
}
export interface IRequestBodyJobOrder {
  title: string;
  product_id: number;
  category_id: number;
  customer_id?: UUID;
  payment_status_id: number;
  payment_method_id?: number;
  bank_account_id?: number;
  is_ready_to_production?: boolean;
  order_date: string;
  due_date: string;
  order_quantity: number;
  order_price: number;
  down_payment?: number;
  tax?: number | null;
  discount?: number | null;
  discount_type: 'percentage' | 'fixed_price' | null;
  delivery_cost: number | null;
  additional_costs: Array<Omit<ITransactionAdditionalCost, 'id'>>;
  body?: string;
  notes?: string;
  images?: Array<string>;
  // customer?: Omit<ICustomer, 'id'>;
  customer?: {
    name: string;
    customer_type: CustomerType;
    phone_number?: string;
    gender?: 'male' | 'female' | 'none';
    email?: string;
    photo_url?: string;
    addresses?: Array<Omit<IAddress, 'id'>>;
    notes?: string;
    avatar_text_color?: string;
  };
  materials: Array<IRequestBodyJobOrderMaterial>;
  generate_invoice: boolean;
}

export type JobOrderFilterPeriod = undefined | 'overtime' | 'today' | 'week' | 'month' | 'year';

export type JobOrderFilterProductionStatusId =
  | null
  | typeof JobOrderProductionStatusIdConstants.Waiting
  | typeof JobOrderProductionStatusIdConstants.InProgress
  | typeof JobOrderProductionStatusIdConstants.Done;
