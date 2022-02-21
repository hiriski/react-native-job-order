import api from '@utils/http';
import { AxiosResponse } from 'axios';
import { Customer, CustomerModel, ResponseListCustomer } from '@app/interfaces/customer';

const CustomerService = {
  findAll: async (params?: Record<string, string>): Promise<AxiosResponse<ResponseListCustomer>> =>
    api.get(`/customer`, { params }),
  find: async (id: number): Promise<AxiosResponse<Customer>> => api.get(`/customer/${id}`),
  create: async (body: CustomerModel): Promise<AxiosResponse<Customer>> => api.post(`/customer`, body),
  update: async (id: number, body: CustomerModel): Promise<AxiosResponse<Customer>> => api.put(`/customer/${id}`, body),
  delete: async (id: number): Promise<AxiosResponse> => api.delete(`/customer/${id}`),
};
export default CustomerService;
