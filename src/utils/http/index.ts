import axios from 'axios';

import { API_BASE_URL } from '@app/constants';
import { setupInterceptorsTo } from './interceptors';

export * from './http-status-codes';

console.log('API_BASE_URL', API_BASE_URL);

const api = setupInterceptorsTo(
  axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);

export default api;
