import { IRoutes, privatePaths } from './utils';
import Generate from '../../pages/Generate/Generate';
import Reports from '../../pages/Reports/Reports';
import Report from '../../pages/Report/Report';


export const PrivateRoutes: IRoutes[] = [
  {
    element: Generate,
    path: privatePaths.generate
  },
  {
    element: Reports,
    path: privatePaths.reports
  },
  {
    element: Report,
    path: privatePaths.report
  }
]