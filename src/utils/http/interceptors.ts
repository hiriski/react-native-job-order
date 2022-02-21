import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

import { httpResponseUnauthorized } from '.';
import { getToken } from '@utils/token';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    } as AxiosRequestHeaders;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`❌❌❌ Request error -> ${JSON.stringify(error)}`);
  }
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (process.env.NODE_ENV === 'development') {
    console.log('💚💚💚 Response success ->', response);
  }
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (process.env.NODE_ENV === 'development') {
    if (httpResponseUnauthorized(error.response?.status as number)) {
      console.log('Error');
    }
  }
  // Check if network disconnected
  if (error.code === 'ECONNABORTED') {
    console.error('❌❌❌ Response error ->', 'Something when wrong with your connection', error);
  }
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
