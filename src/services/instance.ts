import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { store, RootState, logout } from '@state';

export function getCurrentState(): RootState {
  return store.getState();
}
store.subscribe(getCurrentState);

const {
  auth: { token },
} = getCurrentState();

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_baseUrl,
  transformRequest: [
    (data, headers) => {
      if (token) {
        headers!.Authorization = token.value;
      }
      return data;
    },
  ],
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (errorResponse: AxiosError) => {
    if (errorResponse.response?.status === 401) {
      store.dispatch(logout());
      window.location.replace('/login');
    }
    return Promise.reject(errorResponse);
  },
);

export default instance;
