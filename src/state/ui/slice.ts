import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeLanguage } from 'i18next';

import { UIState } from '../state.types';

const initialState: UIState = {
  mode: 'light',
  language: 'ar',
  layout: 'normal',
};

const slice = createSlice({
  name: 'app/ui',
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<'dark' | 'light'>) {
      return { ...state, mode: action.payload };
    },
    changeLayout(state, action: PayloadAction<UIState['layout']>) {
      return { ...state, layout: action.payload };
    },
    toggleLanguage(state, action: PayloadAction<'ar' | 'en'>) {
      changeLanguage(action.payload);
      return { ...state, language: action.payload };
    },
  },
});

export const { changeThemeMode, toggleLanguage, changeLayout } = slice.actions;
export const uiReducer = slice.reducer;
