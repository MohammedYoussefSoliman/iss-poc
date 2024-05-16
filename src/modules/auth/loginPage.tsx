import { useEffect, useMemo } from 'react';

import Keycloak from 'keycloak-js';
import { useCookies } from 'react-cookie';

import { useAppDispatch, useAuth } from '@hooks';
import { login } from '@state';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [cookies, setKeycloakCookies] = useCookies(['keycloak']);
  const { loggedIn } = useAuth();

  /**
   * TODO
   * get keycloak cookies from server
   * const response = await get('/keycloak-cookies')
   * setKeycloakCookies('keycloak', response.data.cookies)
   */

  setKeycloakCookies('keycloak', {
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
  });

  const client = useMemo(() => {
    if (cookies.keycloak) {
      return new Keycloak(cookies.keycloak);
    }
    return null;
  }, [cookies]);

  useEffect(() => {
    if (!loggedIn && client) {
      client
        .init({
          onLoad: 'login-required',
        })
        .then(() => {
          if (client.token) {
            // fetch user info from our servers, for now I will use keycloak token
            dispatch(
              login({
                token: {
                  value: client.token,
                },
                user: {
                  roles: ['user'],
                  firstName: 'John',
                  lastName: 'dao',
                },
              }),
            );
          }
        });
    }
  }, [client, dispatch, loggedIn]);

  if (!client) return <div>loading...</div>;

  return <div>loading...</div>;
};

export default LoginPage;
