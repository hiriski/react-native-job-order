import { ICustomer } from '../customer/customer.interface';
import { IUser } from '../user/user.interface';
import { IBankAccount, IPaymentMethod, IPaymentStatus } from '../job-order/job-order.interface';

export interface IInvoiceLineItem {
  id: string;
  description: string;
  notes?: string | null;
  quantity: string;
  rate: number;
  discount: number;
  total: number;
}

export interface IInvoice {
  id: string;
  invoice_number: string;
  date: string;
  due: string | null;
  payment_status: IPaymentStatus;
  payment_status_id: IPaymentStatus['id'];
  payment_method: IPaymentMethod;
  payment_method_id: IPaymentMethod['id'] | null;
  bank_account: IBankAccount;
  bank_account_id: number | null;
  bill_discount: number | null;
  bill_discount_type: 'percentage' | 'fixed_price' | null;
  customer: ICustomer;
  customer_id: ICustomer['id'];
  line_items: Array<IInvoiceLineItem>;
  down_payment: number | null;
  delivery_cost: number | null;
  tax: number | null;
  sub_total: number;
  total: number;
  notes?: string | null;
  terms_and_conditions?: string | null;
  qr: string;
  paid_at?: string;
  created_by: IUser;
}
