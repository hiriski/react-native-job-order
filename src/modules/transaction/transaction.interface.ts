import { UUID } from '../common/common.interface';
import { IBankAccount, IJobOrder, IPaymentMethod, IPaymentStatus } from './job-order';

export interface ITransactionAdditionalCost {
  id: number;
  additional_cost_name: string;
  additional_cost_value: number;
}

export interface ITransaction {
  id: UUID;
  job_order_id: IJobOrder['id'];
  payment_status_id: IPaymentStatus['id'];
  payment_method_id: IPaymentMethod['id'];
  bank_account_id?: IBankAccount['id'];
  payment_status: IPaymentStatus;
  payment_method: IPaymentMethod;
  bank_account?: IBankAccount;
  order_amount: number;
  delivery_cost: number | null;
  tax: number | null;
  discount: number | null;
  discount_type: 'percentage' | 'fixed_price' | null;
  down_payment: number | null;
  total: number;
  paid_at?: string | null;
  additional_costs: Array<ITransactionAdditionalCost>;
}
