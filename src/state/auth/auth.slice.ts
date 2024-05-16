import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from '../state.types';

const initialState: AuthState = {
  token: null,
  user: {
    roles: [],
    firstName: '',
    lastName: '',
  },
};

const doLogout = () => ({
  token: null,
  rememberMe: false,
  user: {
    roles: [],
    firstName: '',
    lastName: '',
  },
});
const doLogin = (_: AuthState, action: PayloadAction<AuthState>) =>
  action.payload;

const slice = createSlice({
  name: 'app/authentication',
  initialState,
  reducers: {
    logout: doLogout,
    login: doLogin,
    setRememberMe(state, action: PayloadAction<boolean>) {
      return { ...state, rememberMe: action.payload };
    },
  },
});

export const { setRememberMe, logout, login } = slice.actions;
export const authReducer = slice.reducer;
