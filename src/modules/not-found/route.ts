import { ModuleRoute } from '@shared/common.types';

export const route: ModuleRoute = {
  path: '*',
  lazy: async () => {
    const Page = await import('./notfoundPage');
    return { Component: Page.default };
  },
};
