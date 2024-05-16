import { ModuleRoute } from '@shared/common.types';

export const route: ModuleRoute = {
  path: 'login',
  lazy: async () => {
    const Page = await import('./loginPage');
    return { Component: Page.default };
  },
};
