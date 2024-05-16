import { RouteObject } from 'react-router-dom';

export type RoleType = 'user' | 'public' | '*';

export type ModuleRoute = RouteObject & {
  roles?: string[];
};
export type SingleRoleModuleRoute = RouteObject & {
  role: string;
};
