import { IRoutes, publicPaths } from './utils';
import Auth from '../../pages/Auth/Auth';
import About from '../../pages/About/About';


export const PublicRoutes: IRoutes[] = [
  {
    element: Auth,
    path: publicPaths.auth
  },
  {
    element: About,
    path: publicPaths.about
  }
]