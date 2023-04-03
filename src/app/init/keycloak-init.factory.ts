import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment.docker";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.KEYCLOAK_URL,
        realm: "software",
        clientId: "frontend"
      },
      initOptions: {
        onLoad: "login-required",
        checkLoginIframe: false
      }
    });
}