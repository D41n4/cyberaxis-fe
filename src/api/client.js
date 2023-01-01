import axios from "axios";
import { getAuthHeaders, makeLogout } from "./utils";

export const publicClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

publicClient.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err.response?.data)
);

// ----------------------------------------------------

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((request) => {
  const authHeaders = getAuthHeaders();

  request.headers = {
    ...request.headers,
    ...authHeaders,
  };

  return request;
});

apiClient.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      makeLogout();
    }

    return Promise.reject(err.response?.data);
  }
);
