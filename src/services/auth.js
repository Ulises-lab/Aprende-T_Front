import {api} from './api';
import * as USER_HELPERS from "../utils/userToken";
import { successStatus, internalServerError } from "../utils/format-responses";

export function login(credentials) {
  return api
    .post("/auth/login", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function getLoggedIn() {
  return api
    .get(`session`, {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function signup(credentials) {
  return api
    .post("/auth/signup", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logout() {
  return api
    .delete("/auth/logout", {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function recoverPassword(credentials) {

  console.log(credentials,'las credenciales')
  return api
    .post("/auth/recoverPassword", credentials)
    .then(successStatus)
    .catch(internalServerError);
}