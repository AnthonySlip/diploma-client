import { create } from 'zustand';
import { ISigninData, ISignupData } from '../../User/model/types/auth.interface';
import { AuthService } from '../services/Auth';
import { IAccessToken, IAuthResponse } from '../../User/model/types/user.interface';
import { AxiosResponse } from 'axios';

interface AuthState {
  isAuth: boolean
  setAuth: (authState: boolean) => void
  signup: (data: ISignupData) => Promise<AxiosResponse<IAuthResponse>>
  signin: (data: ISigninData) => Promise<AxiosResponse<IAuthResponse>>
  logout: () => Promise<void>
}

export const AuthStore = create<AuthState>((set, get) => ({
  isAuth: false,
  setAuth: (authState: boolean) => set(() => ({ isAuth: authState })),
  signup: async (data: ISignupData) => {
    const response = await AuthService.signup(data);
    if (response.status < 300) {
      set(() => ({ isAuth: true }));
    }
    return response
  },
  signin: async (data: ISigninData) => {
    const response = await AuthService.signin(data);
    if (response.status < 300) {
      set(() => ({ isAuth: true }));
    }
    return response;
  },
  logout: async () => {
    await AuthService.signout();
    set(() => ({ isAuth: false }));
  },
}));