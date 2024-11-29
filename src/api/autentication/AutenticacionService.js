import axios from "axios";
import { AUTH_URL, setErrorResponse, setSuccessResponse } from "./../util";
import { createBasicAuthToken, registerSuccessLoginJWT } from "./utilAuth";
import { setBearerToken } from "../homepay/axiosConfig";

const authAxios = axios.create({
    validateStatus(status) {
        return status >= 200 && status < 500;
    },
});

authAxios.defaults.baseURL = AUTH_URL;

export const executeBasicAuthentication = async (email, password) => {
    try {
        const response = await authAxios.post(
            "/authenticate",
            {},
            {
                headers: {
                    Authorization: createBasicAuthToken(email, password),
                },
            },
        );
        const { header, data } = response.data;
        console.log("response Autentication: ", data);

        if (header.code === "200" && data.email === email) {
            setBearerToken(data.token);
            return setSuccessResponse(response);
        } else {
            throw new Error(header.message);
        }
    } catch (error) {
        console.log("error n basic auten: ", error);
        return setErrorResponse(error);
    }
};

export const executeJWTAuthentication = async (email, password) => {
    try {
        const response = await authAxios.post("/authenticate", {
            email,
            password,
        });

        if (response.data.header.code === "200" && response.data.data.email === email) {
            return await registerSuccessLoginJWT(response.data.data, "");
        } else {
            throw new Error(response.data.header.message);
        }
    } catch (error) {
        return setErrorResponse(error);
    }
};

export const executeRegister = async (userData) => {
    return authAxios.post("/register", userData);
};

export const executeJWTAuthenticationWithFirebase = async (tokenFirebase, imageUrl) => {
    console.log("TOKEN EN CLIENTE: ", tokenFirebase);
    try {
        const response = await authAxios.post("/authenticateFirebase", {
            tokenFirebase: tokenFirebase,
        });

        console.log("response Autentication: ", response.data);

        if (response.data.header.code === "200") {
            await registerSuccessLoginJWT(response.data.data, tokenFirebase, imageUrl);
            return { id: response.data.data.id };
        } else {
            throw new Error(response.data.header.message);
        }
    } catch (error) {
        return setErrorResponse(error);
    }
};

export const executeJWTAuthenticationWithGoogle = async (userData, token, imageUrl) => {
    console.log("TOKEN EN CLIENTE: ", token);
    try {
        /*const response = await authAxios.post(      "/authenticateFirebase",
      {
        tokenFirebase: tokenFirebase,
      }
    );

    console.log("response Autentication: ", response.data);

    if (response.data.header.code === "200") {
      await registerSuccessLoginJWT(response.data.data, tokenFirebase);
      return { id: response.data.data.id };
    } else {
      throw new Error(response.data.header.message);
    }
    */

        await registerSuccessLoginJWT(userData, token, imageUrl);
    } catch (error) {
        return setErrorResponse(error);
    }
};
