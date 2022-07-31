import { IUser } from '../user/user.interface';

export interface INote {
  id: string;
  body: string;
  user: IUser;
  created_at: string;
}
