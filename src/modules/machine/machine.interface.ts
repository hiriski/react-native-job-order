export interface IMachineCategory {
  id: number;
  name: string;
  machine_counts: number;
  image_url?: string | null;
  is_initial: boolean;
}

interface IMachineBrand {
  id: number;
  name: string;

  machine_counts: number;
  image_url?: string | null;
  is_initial: boolean;
}
export interface IMachine {
  id: number;
  name: string;
  serial?: string | null;
  type?: string | null;
  image_url?: string | null;
  description?: string | null;
  notes: string | null;
  status: 'active' | 'inactive';
  category: IMachineCategory;
  brand: IMachineBrand;
  is_initial: boolean;
}
