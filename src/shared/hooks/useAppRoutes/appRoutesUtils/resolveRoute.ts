import { RouteObject } from 'react-router-dom';

import { roles } from '@constants';
import { SingleRoleModuleRoute } from '@shared/common.types';
import { LayoutType } from '@shared/layouts';

export type ReadyRoute = {
  routes: RouteObject[];
  role?: string;
  layout?: LayoutType;
};

const prepareRoute = (
  currentReadyRoutes: ReadyRoute[],
  routeOriginal: RouteObject,
  role: string = 'public',
) => {
  const routeRole = roles.find((rol) => rol.role === role);
  const foundRole = currentReadyRoutes.find(
    (readyRoute) => readyRoute.role === role,
  );
  if (foundRole) {
    foundRole.routes = [...foundRole.routes, routeOriginal as RouteObject];
  } else {
    currentReadyRoutes = [
      ...currentReadyRoutes,
      {
        routes: [routeOriginal as RouteObject],
        role,
        layout: routeRole?.layout || 'normal',
      },
    ];
  }
  return currentReadyRoutes;
};

export const resolveRoute = (
  route: SingleRoleModuleRoute,
  readyRoutes: ReadyRoute[],
): ReadyRoute[] => {
  const currentReadyRoutes: ReadyRoute[] = [...readyRoutes];
  const routeOriginal = { ...route };
  return prepareRoute(
    currentReadyRoutes,
    routeOriginal as RouteObject,
    route.role || 'public',
  );
};
