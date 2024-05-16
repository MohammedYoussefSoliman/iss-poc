import EmptyLayout from './EmptyLayout';
import NormalLayout from './NormalLayout';

export const layouts = {
  normal: NormalLayout,
  empty: EmptyLayout,
} as const;

export type LayoutType = keyof typeof layouts;
