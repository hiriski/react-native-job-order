export interface IAddress {
  id: string;
  label: string;
  address_details?: string;
  district: string;
  city: string;
  province: string;
  postcode?: string | null;
  country: string;
  created_at?: string;
  updated_at?: string;
}
