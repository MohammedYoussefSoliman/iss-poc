import KeycloakOriginal from 'keycloak-js';

class Keycloak {
  private static instance: KeycloakOriginal;

  static getKeycloak() {
    if (!Keycloak.instance) {
      Keycloak.instance = new KeycloakOriginal({
        url: import.meta.env.VITE_KEYCLOAK_URL,
        realm: import.meta.env.VITE_KEYCLOAK_REALM,
        clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
      });
    }
    return Keycloak.instance;
  }
}

export default Keycloak;
