import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/api";

const getToken = (): string | undefined => {
  if (typeof window === "undefined") {
    const { cookies } = require("next/headers");
    return cookies().get("jwt")?.value;
  } else {
    return Cookies.get("jwt");
  }
};

const addAuthInterceptor = (client: AxiosInstance): void => {
  client.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

const createApiClient = (contentType: string): AxiosInstance => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": contentType,
    },
  });

  addAuthInterceptor(client);

  return client;
};
export const API_JSON_CLIENT = createApiClient("application/json");
export const API_FORM_DATA_CLIENT = createApiClient("multipart/form-data");