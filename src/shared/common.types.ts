import { RouteObject } from 'react-router-dom';

export type LayoutType = 'normal' | 'empty' | 'headless' | 'footless';

export type ModuleRoute = RouteObject & {
  layout?: LayoutType;
};
