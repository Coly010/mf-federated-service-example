import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () =>
      import('@mfexample/remote2/set-user-details').then((m) => m.Remote2SetUserDetailsModule) },
];
