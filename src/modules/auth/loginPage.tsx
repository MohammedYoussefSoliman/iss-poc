import { useEffect, useMemo } from 'react';

// import { useCookies } from 'react-cookie';

import { useAppDispatch, useAuth } from '@hooks';
import { login } from '@state';
import { Keycloak } from '@utils';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  // const [cookies, setKeycloakCookies] = useCookies(['keycloak']);
  const { loggedIn } = useAuth();

  /**
   * TODO
   * get keycloak cookies from server
   * const response = await get('/keycloak-cookies')
   * setKeycloakCookies('keycloak', response.data.cookies)
   */

  // setKeycloakCookies('keycloak', {
  //   url: import.meta.env.VITE_KEYCLOAK_URL,
  //   realm: import.meta.env.VITE_KEYCLOAK_REALM,
  //   clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
  // });

  const client = useMemo(() => Keycloak.getKeycloak(), []);

  useEffect(() => {
    if (!loggedIn) {
      client
        .init({
          onLoad: 'login-required',
          // redirectUri: 'http://localhost:5173/',
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
          window.location.replace('/');
        });
    }
  }, [client, dispatch, loggedIn]);

  return <div>login...</div>;
};

export default LoginPage;
