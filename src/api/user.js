import { client } from "./client";

export const changeName = (name) => {
  return client({
    url: "/user/change-name",
    method: "PUT",
    data: { name },
  }).then((res) => res.data.data);
};

export const getTrustedAccounts = () => {
  return client({
    url: "/user/trusted-accounts",
    method: "GET",
  }).then((res) => res.data.data);
};

export const addTrustedAccount = (id, name) => {
  return client({
    url: "/user/trusted-accounts",
    method: "POST",
    data: { id, name },
  }).then((res) => res.data.data);
};

export const deleteTrustedAccount = (id) => {
  return client({
    url: `/user/trusted-accounts/${id}`,
    method: "DELETE",
  }).then((res) => res.data.data);
};
