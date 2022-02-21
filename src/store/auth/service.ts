import { AxiosResponse } from 'axios';
import api from '../../utils/http';
import { LoginModel, LoginWithSocialAccountModel, RegisterModel, ResponseLoginUser } from '@app/interfaces/auth';
import { User } from '@app/interfaces/user';

const AuthService = {
  register: async (body: RegisterModel): Promise<AxiosResponse<ResponseLoginUser>> => {
    return await api.post('/auth/register', body);
  },

  login: async (body: LoginModel): Promise<AxiosResponse<ResponseLoginUser>> => {
    return await api.post('/auth/login', body);
  },

  revokeToken: async (): Promise<AxiosResponse<unknown>> => {
    return await api.post('/auth/revoke-token');
  },

  user: async (): Promise<AxiosResponse<User>> => {
    return await api.get('/auth/user');
  },

  loginWithSocialAcccount: async (body: LoginWithSocialAccountModel): Promise<AxiosResponse<ResponseLoginUser>> => {
    return await api.post('/auth/social', body);
  },
};

export default AuthService;
