export interface IUser {
  id: number
  email: string
  firstName: string
  lastName: string
}

export interface IAccessToken {
  expiresIn: string
  token: string
}

export interface IAuthResponse {
  accessToken: IAccessToken
  user: IUser
}
