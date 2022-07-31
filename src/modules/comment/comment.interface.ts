import { UUID } from '@/interfaces/common.interface';
import { IUser } from '../user/user.interface';

export interface IComment {
  id: UUID;
  body: string;
  user: IUser;
}
