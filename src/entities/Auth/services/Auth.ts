import $api, { $apiClassic } from '../../../shared/api/interceptors';
import { AxiosResponse } from 'axios';
import { IAccessToken, IAuthResponse, IUser } from '../../User/model/types/user.interface';
import { ISigninData, ISignupData } from '../../User/model/types/auth.interface';

export const AuthService = {

  getAuthUrl (url: string): string {
    return '/auth' + url
  },

  async signup (data: ISignupData): Promise<AxiosResponse<IAuthResponse>> {
    return (await $apiClassic.post(this.getAuthUrl('/signup'), data))
  },

  async signin (data: ISigninData): Promise<AxiosResponse<IAuthResponse>> {
    return (await $apiClassic.post(this.getAuthUrl('/signin'), data))
  },

  async signout (): Promise<void> {
    await $apiClassic.post(this.getAuthUrl('/signout'))
  },

  async refresh (): Promise<AxiosResponse<IAccessToken>> {
    return (await $api.get(this.getAuthUrl('/refresh')))
  }
}