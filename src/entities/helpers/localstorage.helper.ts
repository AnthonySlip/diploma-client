import { IAccessToken } from '../User/model/types/user.interface';


export const LocalstorageHelper = {


  setToken (token: IAccessToken): void {
    localStorage.setItem('accessToken', JSON.stringify(token))
  },
  removeToken (): void {
    localStorage.removeItem('accessToken')
  },
}