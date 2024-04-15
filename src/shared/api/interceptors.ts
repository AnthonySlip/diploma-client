import axios from 'axios';
import { API_URL } from '../config/api.config';
import { AuthService } from '../../entities/Auth/services/Auth';


const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originRequest = error.config;
    if (
      !originRequest.isRetry &&
      error.response &&
      error.response.status === 401
    ) {
      try {
        originRequest.isRetry = true;
        await AuthService.refresh();
        return $api.request(originRequest);
      } catch (e) {
        console.error(e);
      }
    }
    throw error;
  },
);

export default $api;

export const $apiClassic = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
