/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Slices
import { authReducer } from './auth';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'iis-storage',
  storage,
  whitelist: ['ui'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: any[] = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export actions
export * from './ui';
export * from './auth';
