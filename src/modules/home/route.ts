import { ModuleRoute } from '@shared/common.types';

export const route: ModuleRoute = {
  index: true,
  roles: ['user'],
  lazy: async () => {
    const Page = await import('./homePage');
    return { Component: Page.default };
  },
};
