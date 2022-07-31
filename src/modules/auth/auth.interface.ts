import { IUser } from '../user/user.interface';

/** Request body for login user */
export interface IRequestLogin {
  email: string;
  password: string;
}

// Login response
export interface IResponseLogin {
  success: boolean;
  token: string;
  token_type?: string;
  user: IUser;
}

// Response register - it same with response login.
export interface IResponseRegister extends IResponseLogin {}
