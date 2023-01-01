import queryString from "query-string";

export const encodeQueryParams = (queryParameters) => {
  const queryParams = queryString.stringify(queryParameters);
  return queryParams ? `?${queryParams}` : "";
};

export const getAuthHeaders = () => {
  const headers = {};
  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const tokenStorageKey = "cyber:auth";

export const setToken = (token) => {
  window.localStorage.setItem(tokenStorageKey, token);
};

export const getToken = () => {
  const token = window.localStorage.getItem(tokenStorageKey);
  return token;
};

export const makeLogout = () => {
  window.localStorage.removeItem(tokenStorageKey);
  window.location.href = "/auth";
};
