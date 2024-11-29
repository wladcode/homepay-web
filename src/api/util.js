import axios from "axios";
import { createJWTToken } from "./autentication/utilAuth";

export const API_URL = process.env.REACT_APP_API_URL;
export const AUTH_URL = API_URL + "/v1/users";
export const DEPART_URL = API_URL + "/v1/depart";
export const INQUILINO_URL = API_URL + "/v1/inquilino";
export const CONTRACT_URL = API_URL + "/v1/contract";

export const USERNAME_SESSION = "profile";
export const NETWORK_MESSAGE = "Network Error";

export function setUserToSessionStorage(data) {
    sessionStorage.setItem(USERNAME_SESSION, JSON.stringify(data));
}
export function getUserFromSessionStorage() {
    return JSON.parse(sessionStorage.getItem(USERNAME_SESSION));
}

export function setSuccessResponse(response) {
    const { header, data } = response.data;

    if (header.code === "200") {
        return {
            data: data,
            message: { show: true, message: header.message },
        };
    } else {
        throw new Error(header.message);
    }
}

export function setErrorResponse(error) {
    console.log("error: ", error);

    let errorMessage = error;

    if (error.message) {
        errorMessage = error.message;
    } else if (error.response && error.response.data) {
        errorMessage = error.message;
    }

    throw new Error(
        JSON.stringify({
            show: true,
            message: errorMessage,
        }),
    );
}

export function getUserInfo() {
    let user = getUserFromSessionStorage();

    console.log("USER LOGGED: ", user);

    if (user === null) {
        return null;
    }

    return user;
}

function isUserInSession() {
    let user = getUserFromSessionStorage();

    if (user === null) {
        return false;
    }

    return true;
}

export function isUserLoggedIn(currentUser) {
    let userInStore = isUserInSession();

    if (userInStore && currentUser) {
        return true;
    }

    return false;
}

export async function setUpAxiosInterceptor(token) {
    /*
        let userName = 'wlopez'
        let passoword = 'wlopez'
        let basicAuthHeader = 'Basic ' + window.btoa(userName + ":" + passoword)
        */

    axios.interceptors.request.use((config) => {
        console.log("INTERCEPTOR CONFIG: ", token);

        if (isUserInSession()) {
            config.headers.authorization = createJWTToken(token);
        }
        return config;

        /*,
                EJEMPLO DE HEADER DE FORMA INDIVIDUAL
                {
                    headers: {
                        authorization: this.basicAuthHeader
                    }
                }
            */
    });
}
