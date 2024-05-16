import { RoleType } from '@shared/common.types';
import { LayoutType } from '@shared/layouts';

type Role = {
  role: RoleType;
  layout: LayoutType;
};

export const roles: Role[] = [
  {
    role: 'public',
    layout: 'normal',
  },
  {
    role: '*',
    layout: 'empty',
  },
  {
    role: 'user',
    layout: 'normal',
  },
];
