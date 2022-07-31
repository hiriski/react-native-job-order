export interface IRolePermission {
  id: number;
  name: string;
  code: string;
  description?: string;
}

export interface IRole {
  id: number;
  name: string;
  slug: string;
  permissions: Array<IRolePermission>;
  description?: string;
}
