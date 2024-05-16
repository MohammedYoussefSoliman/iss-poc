export type UIState = {
  mode: 'dark' | 'light';
  language: 'en' | 'ar';
  layout: 'normal' | 'empty';
};

export type UserType = {
  roles: string[];
  firstName: string;
  lastName: string;
  id?: string;
  avatar?: string;
};

export type AuthState = {
  token: {
    value: string;
  } | null;
  user: UserType;
};
