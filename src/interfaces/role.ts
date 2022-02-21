export interface RolePermission {
  id: number;
  name: string;
  code: string;
  description?: string;
}

export interface Role {
  id: number;
  name: string;
  slug: string;
  permissions: RolePermission[];
  description?: string;
}
