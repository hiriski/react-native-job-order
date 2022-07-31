import { UUID } from '@/interfaces/common.interface';
import { IAddress } from '@/modules/address/address.interface';

export type CustomerType = 'individual' | 'company';

export interface ICustomer {
  id: UUID;
  name: string;
  customer_type: CustomerType;
  phone_number?: string;
  gender?: 'male' | 'female' | 'none';
  email?: string;
  photo_url?: string;
  addresses?: Array<IAddress>;
  avatar_text_color: string;
  notes?: string;
  qr?: string | null;
}

export interface IRequestCustomer extends Omit<ICustomer, 'id' | 'addresses'> {
  addresses: Array<Omit<IAddress, 'id' | 'qr' | 'created_at' | 'updated_at'>>;
  photo?: string;
}
