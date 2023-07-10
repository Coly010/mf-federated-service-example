import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@mfexample/remote1/user-details').then(m => m.Remote1UserDetailsModule) }
];
