import api from '@/utils/http';
import { AxiosResponse } from 'axios';
import { Jo, ResponseListJo, JoModel, JoInvoiceData } from '@/interfaces/jo';

export type TPayloadGetJoInvoiceData = {
  jo_ids: Array<number | string>;
};

const JoService = {
  findAll: async (params?: Record<string, string | number>): Promise<AxiosResponse<ResponseListJo>> => {
    return api.get(`/jo`, { params });
  },

  create: async (body: JoModel): Promise<AxiosResponse<Jo>> => {
    return api.post(`/jo`, body);
  },

  find: async (id: number): Promise<AxiosResponse<Jo>> => {
    return api.get(`/jo/${id}`);
  },

  update: async (id: number, body: JoModel): Promise<AxiosResponse<Jo>> => {
    return api.put(`/jo/${id}`, body);
  },

  getInvoiceData: async (arrJoIds: TPayloadGetJoInvoiceData): Promise<AxiosResponse<JoInvoiceData>> => {
    return api.post('/jo/get-invoice-data', arrJoIds);
  },

  updatePaymentStatus: async (joId: number, paymentStatusId: number): Promise<AxiosResponse<Jo>> => {
    return api.put(`/jo/update-payment-status/${joId}`, {
      payment_status_id: paymentStatusId,
    });
  },

  updateProductionStatus: async (joId: number, productionStatusId: number): Promise<AxiosResponse<Jo>> => {
    return api.put(`/jo/update-production-status/${joId}`, {
      production_status_id: productionStatusId,
    });
  },

  updatePercentageProgress: async (joId: number, value: number): Promise<AxiosResponse<Jo>> => {
    return api.put(`/jo/update-percentage-progress/${joId}`, { value });
  },

  addNotes: async (joId: number, notes: string): Promise<AxiosResponse<Jo>> => {
    return api.put(`/jo/add-note/${joId}`, { notes });
  },
};

export default JoService;
