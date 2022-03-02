import api from '@utils/http';
import { AxiosResponse } from 'axios';
import { Customer, CustomerModel, ResponseListCustomer } from '@app/interfaces/customer';

const CustomerService = {
  findAll: async (params?: Record<string, string>): Promise<AxiosResponse<ResponseListCustomer>> => {
    return api.get('/customer', { params });
  },

  find: async (id: string): Promise<AxiosResponse<Customer>> => {
    return api.get(`/customer/${id}`);
  },

  create: async (body: CustomerModel): Promise<AxiosResponse<Customer>> => {
    return api.post('/customer', body);
  },

  update: async (id: string, body: CustomerModel): Promise<AxiosResponse<Customer>> => {
    return api.put(`/customer/${id}`, body);
  },

  delete: async (id: string): Promise<AxiosResponse> => {
    return api.delete(`/customer/${id}`);
  },
};
export default CustomerService;
