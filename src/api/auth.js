import { publicClient } from "./client";

export const makeLogin = ({ email, password }) => {
  return publicClient({
    url: "/auth/login",
    method: "POST",
    data: { email, password },
  }).then((res) => res.data);
};

export const makeSignUp = ({ email, password }) => {
  return publicClient({
    url: "/auth/signup",
    method: "POST",
    data: { email, password },
  }).then((res) => res.data);
};
