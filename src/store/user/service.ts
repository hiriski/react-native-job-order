import { UserModel, ResponseListUser, User } from '@/interfaces/user';
import api from '@/utils/http';
import { AxiosResponse } from 'axios';

const UserService = {
  findAll: async (params?: Record<string, string>): Promise<AxiosResponse<ResponseListUser>> => {
    return api.get(`/user`, { params });
  },

  find: async (id: number): Promise<AxiosResponse<User>> => {
    return api.get(`/user/${id}`);
  },

  create: async (body: UserModel): Promise<AxiosResponse<User>> => {
    return api.post(`/user`, body);
  },

  update: async (id: string, body: UserModel): Promise<AxiosResponse<User>> => {
    return api.put(`/user/${id}`, body);
  },

  delete: async (id: string): Promise<AxiosResponse> => {
    return api.delete(`/user/${id}`);
  },
};
export default UserService;
