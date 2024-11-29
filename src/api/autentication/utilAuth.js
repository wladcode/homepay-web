import { setUpAxiosInterceptor, setUserToSessionStorage } from "../util";

export function logoutProps(history) {
    console.log("Cerrando session");
    sessionStorage.clear();
    history.push("/login");
}

export function createBasicAuthToken(username, password) {
    console.group("createBasicAuthToken");
    console.log("Usuario logeado", username);
    console.log("password", password);
    console.groupEnd();
    return "Basic " + window.btoa(`${username}:${password}`);
}

export function createJWTToken(token) {
    return "Bearer " + token;
}

export function registerSuccessLoginBasic(username, password) {
    console.log("Usuario logeado");

    setUserToSessionStorage({ username });
    setUpAxiosInterceptor(this.createBasicAuthToken(username, password));
}

export async function registerSuccessLoginJWT(user, token, imageUrl) {
    try {
        console.log("Usuario logeado: ", user);
        const userData = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            token: token,
            imageUrl: imageUrl,
        };

        setUserToSessionStorage(userData);
    } catch (error) {
        console.log("Error: ", error);
    }
}
