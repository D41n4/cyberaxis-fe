import { client } from "./client";

export const changeName = (name) => {
  return client({
    url: "/user/change-name",
    method: "PUT",
    data: { name },
  }).then((res) => res.data);
};
