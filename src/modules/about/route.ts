import { ModuleRoute } from '@shared/common.types';

export const route: ModuleRoute = {
  path: 'about',
  layout: 'normal',
  lazy: async () => {
    const Page = await import('./aboutPage');
    return { Component: Page.default };
  },
};
