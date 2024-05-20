import { useCallback, useMemo } from 'react';

import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import { logout as doLogout, login as doLogin } from '@state';
import { Keycloak } from '@utils';

import { useAppSelector, useAppDispatch } from './reduxHooks';

// If we needed to use keycloak config by cookies we will send the configs as a prop to the hook

export function useAuth() {
  const navigate = useNavigate();
  const keycloak = useMemo(() => Keycloak.getKeycloak(), []);
  const dispatch = useAppDispatch();
  const {
    auth: { token, user },
  } = useAppSelector((state) => state);

  const login = useCallback(async () => {
    keycloak
      .init({
        onLoad: 'login-required',
        flow: 'implicit',
      })
      .then(() => {
        if (keycloak.token) {
          // fetch user info from our servers, for now I will use keycloak token
          dispatch(
            doLogin({
              token: {
                value: keycloak.token,
              },
              user: {
                roles: ['user'],
                firstName: 'John',
                lastName: 'dao',
              },
            }),
          );
        }
        keycloak.login({
          redirectUri: 'http://localhost:5173/',
        });
        navigate('/');
      });
  }, [dispatch, keycloak, navigate]);

  const logout = useCallback(async () => {
    dispatch(doLogout());
    window.location.replace(
      `${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}/protocol/openid-connect/logout?post_logout_redirect_uri=http://localhost:5173/login&client_id=${import.meta.env.VITE_KEYCLOAK_CLIENT}`,
    );
  }, [dispatch]);

  return {
    loggedIn: _.isObject(token),
    token,
    keycloak,
    logout,
    login,
    user,
  };
}
