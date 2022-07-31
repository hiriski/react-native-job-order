import { http } from '@/utils/http';
import { AxiosResponse } from 'axios';

// Auth api endpoints
import { AuthApiEndpoints } from './auth-api-endpoint.enum';

// Interfaces.
import { IRequestLogin, IResponseLogin } from '../auth.interface';

/**
 * Auth api service.
 */
class AuthApiService {
  /**
   * @description - Login user with email and password.
   * @param {IRequestLogin} body
   * @returns Promise<AxiosResponse<IResponseLogin>>
   */
  loginWithEmailAndPassword = async (body: IRequestLogin): Promise<AxiosResponse<IResponseLogin>> => {
    return await http.post(AuthApiEndpoints.login, body);
  };

  /**
   * @description - Revoking sanctum token from the server.
   * @returns Promise<AxiosResponse<IResponseLogin>>
   */
  revokeToken = async (): Promise<AxiosResponse<null>> => {
    return await http.post(AuthApiEndpoints.revokeToken);
  };
}

export default new AuthApiService();
