import { client } from "./client";

export const makeLogin = ({ email, password }) => {
  return client({
    url: "/auth/login",
    method: "POST",
    data: { email, password },
  }).then((res) => res.data);
};

export const makeSignUp = ({ name, email, password }) => {
  return client({
    url: "/auth/signup",
    method: "POST",
    data: { name, email, password },
  }).then((res) => res.data);
};

export const getAuthUser = () => {
  return client({
    url: `/auth/user`,
    method: "GET",
  }).then((res) => res.data);
};
