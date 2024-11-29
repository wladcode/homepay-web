import axios from "axios";
import { API_URL, setErrorResponse, setSuccessResponse } from "./../util";

const apiAxios = axios.create({
    validateStatus(status) {
        return status >= 200 && status < 500;
    },
});

apiAxios.defaults.baseURL = API_URL;

apiAxios.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    console.log("Request URL", request.url);
    console.log("Request Method", request.method);
    console.log("request.baseURL", request.baseURL);
    return request;
});

apiAxios.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        const { status, data } = response;
        if (status === 200) {
            const { header } = data;
            if (header.code === "200") {
                console.log("2000", data);
                return setSuccessResponse(response);
            } else {
                return setErrorResponse(header.message);
            }
        } else {
            console.log("not 2000", data.error);
            throw setErrorResponse(`${status}-${data.error}`);
        }
    },
    (error) => {
        console.log("Error in interceptor:", error);
        return setErrorResponse(error);
    },
);

export const setBearerToken = (token) => {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const executePost = (url, params) => {
    return apiAxios.post(url, { ...params });
};

export const executeGet = (url, params) => {
    if (params) {
        return apiAxios.get(`${url}${params}`);
    }
    return apiAxios.get(url);
};
