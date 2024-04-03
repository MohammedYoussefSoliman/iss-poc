import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { NormalLayout, EmptyLayout } from '@layouts';

type AppRoutsHook = {
  rootPath?: string;
  layout: 'normal' | 'empty';
  routes: RouteObject[];
};

export const useAppRoutes = ({ rootPath, layout, routes }: AppRoutsHook) => {
  return createBrowserRouter([
    {
      path: rootPath || '/',
      element: layout === 'normal' ? <NormalLayout /> : <EmptyLayout />,
      children: routes,
    },
  ]);
};
