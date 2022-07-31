export type MaterialUnit = 'mm' | 'cm' | 'm' | 'inch' | 'liter' | 'gram' | 'kg' | 'pcs' | 'sheet' | 'ream' | 'roll';

export interface IMaterialCategory {
  id: number;
  name: string;
  description: string | null;
  material_counts: number;
  image_url: string | null;
  is_initial: boolean;
}

export interface IMaterialBrand {
  id: number;
  name: string;
  description: string | null;
  material_counts: number;
  image_url: string | null;
  is_initial: boolean;
}

export interface IMaterialType {
  id: number;
  name: string;
  unit_material: MaterialUnit;
  description: string | null;
  material_counts: number;
  is_initial: boolean;
}

export interface IMaterial {
  id: number;
  name: string;
  unit: MaterialUnit;
  display_unit: MaterialUnit;
  stock_length: number | null;
  stock_width: number | null;
  stock_pcs: number | null;
  stock_sheet: number | null;
  width_per_roll: number | null;
  length_per_roll: number | null;
  sheet_per_ream: number | null;
  price: number | null;
  description: string | null;
  status: 'active' | 'inactive';
  image_url: string | null;
  created_at: string;
  updated_at: string;
  brand: IMaterialBrand;
  material_brand_id: IMaterialBrand['id'];
  category: IMaterialCategory;
  type: IMaterialType;
  material_type_id: IMaterialType['id'];
  is_initial: boolean;
}

export interface IRequestMaterial extends Omit<IMaterial, 'category' | 'image_url' | 'created_at' | 'updated_at'> {
  material_brand_id: IMaterialBrand['id'];
  material_category_ids: Array<IMaterialCategory['id']>;
  material_type_id: IMaterialType['id'];
  image: string | null;
}

// alias
export type RequestMaterial = IRequestMaterial;
