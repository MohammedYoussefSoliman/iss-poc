import { createBrowserRouter } from 'react-router-dom';

import { Shield } from '@components';
import { ModuleRoute, SingleRoleModuleRoute } from '@shared/common.types';

import { resolveRoute, ReadyRoute } from './appRoutesUtils/resolveRoute';

type AppRoutsHook = {
  rootPath?: string;
  routes: ModuleRoute[];
};

const prepareSingleRoleRoute = (
  moduleRoute: ModuleRoute,
): SingleRoleModuleRoute[] => {
  let preparedRoutes: SingleRoleModuleRoute[] = [];
  if (!moduleRoute.roles) moduleRoute.roles = ['public'];
  moduleRoute.roles.forEach((role) => {
    const route = { ...moduleRoute };
    delete route.roles;
    preparedRoutes = [...preparedRoutes, { ...route, role }];
  });
  return preparedRoutes;
};

const prepareRoutes = (
  moduleRoutes: ModuleRoute[],
  readyRoutes: ReadyRoute[] = [],
): ReadyRoute[] => {
  let preparedSingleRouteModules: SingleRoleModuleRoute[] = [];
  moduleRoutes.forEach((route) => {
    preparedSingleRouteModules = [
      ...preparedSingleRouteModules,
      ...prepareSingleRoleRoute(route),
    ];
  });

  if (!preparedSingleRouteModules.length) {
    return readyRoutes;
  }

  const configuredRoutes = resolveRoute(
    preparedSingleRouteModules[0],
    readyRoutes,
  );
  return prepareRoutes(moduleRoutes.slice(1), configuredRoutes);
};

export const useAppRoutes = ({ rootPath, routes }: AppRoutsHook) => {
  const shieldedRoutes = prepareRoutes(routes, []).map((route) => ({
    element: (
      <Shield layout={route.layout || 'normal'} role={route.role || 'public'} />
    ),
    children: route.routes,
  }));

  return createBrowserRouter([
    {
      path: rootPath || '/',
      children: shieldedRoutes,
    },
  ]);
};
