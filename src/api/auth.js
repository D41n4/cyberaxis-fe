import { client } from "./client";

export const makeLogin = ({ email, password }) => {
  return client({
    url: "/auth/login",
    method: "POST",
    data: { email, password },
  }).then((res) => res.data);
};

export const makeSignUp = ({ email, password }) => {
  return client({
    url: "/auth/signup",
    method: "POST",
    data: { email, password },
  }).then((res) => res.data);
};

export const getAuthUser = () => {
  const path = `/auth/user`;
  return client({
    method: "GET",
    url: path,
  }).then((res) => res.data);
};
