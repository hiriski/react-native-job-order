import { User } from './user';
import { AuthSocialProvider } from '@/enum/social-provider';

export interface ResponseLoginUser {
  success: boolean;
  token: string;
  token_type?: string;
  user: User;
}

export interface LoginModel {
  email: string;
  password: string;
}

export interface RegisterModel {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

export interface LoginWithSocialAccountModel {
  social_id: number | string;
  social_name: string;
  social_email: string;
  social_photo_url: string;
  social_provider: keyof AuthSocialProvider;
}
