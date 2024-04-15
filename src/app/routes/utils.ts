import { FC, JSX } from 'react';


export interface IRoutes {
  element: FC
  path: string
}

interface IPublicPaths {
  about: string
  auth: string
}

interface IPrivatePaths {
  generate: string
  reports: string
  report: string
}

export const publicPaths: IPublicPaths = {
  about: '/',
  auth: '/auth'
}

export const privatePaths: IPrivatePaths = {
  generate: '/generate',
  reports: '/reports',
  report: 'report/:id'
}