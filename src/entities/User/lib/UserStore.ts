import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../model/types/user.interface';

interface UserState {
  user: IUser
  setUser: (data: IUser) => void
  removeUser: () => void
}

export const UserStore = create(persist<UserState>(
  (set, get) => ({
    user: {} as IUser,
    setUser: (data: IUser) => set(() => ({user: data})),
    removeUser: () => set(() => ({user: {} as IUser}))
  }),
  {
    name: 'user',
    storage: createJSONStorage(() => localStorage)
  }
))