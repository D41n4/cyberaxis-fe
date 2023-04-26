import axios from "axios";
import { getAuthHeaders } from "./utils";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((request) => {
  const authHeaders = getAuthHeaders();

  request.headers = request.headers = {
    ...request.headers,
    ...authHeaders,
  };

  return request;
});

client.interceptors.response.use(
  (response) => response,
  async (err) => {
    return await Promise.reject(err.response?.data);
  }
);
