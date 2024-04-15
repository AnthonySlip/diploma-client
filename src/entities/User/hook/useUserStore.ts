import { AuthStore } from '../../Auth/lib/AuthStore';
import { UserStore } from '../lib/UserStore';
import { ISigninData, ISignupData } from '../model/types/auth.interface';
import { LocalstorageHelper } from '../../helpers/localstorage.helper';
import { AxiosResponse } from 'axios';


export const useUserStore = () => {

  const { signup, signin, logout } = AuthStore()

  const { setUser, removeUser } = UserStore()

  const signUp = async (data: ISignupData): Promise<AxiosResponse> => {
    const res = await signup(data)

    if (res.status < 300) {
      setUser(res.data.user)
    }

    return res
  }

  const signIn = async (data: ISigninData): Promise<AxiosResponse> => {
    const res = await signin(data)

    if (res.status < 300) {
      setUser(res.data.user)
    }

    return res
  }

  const logOut = async (): Promise<void> => {
    await logout()
    removeUser()
    LocalstorageHelper.removeToken()
  }

  return {
    signUp,
    signIn,
    logOut
  }

}