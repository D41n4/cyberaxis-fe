import { encodeQueryParams } from "./utils";

const { client } = require("./client");

// ----------------------------------------------------
export const topHashtags = () => {
  return client({
    url: "/tweets/top-hashtags",
    method: "GET",
  }).then((res) => res.data.data);
};

// ----------------------------------------------------
export const getTweets = ({
  selectedHashtags,
  selectedEntities,
  dateFilter,
  searchString,
}) => {
  return client({
    url: `/tweets${encodeQueryParams({
      selectedHashtags,
      selectedEntities,
      dateFilter,
      searchString,
    })}`,
    method: "GET",
  }).then((res) => res.data.data);
};

// ----------------------------------------------------
export const getSavedTweets = () => {
  return client({
    url: `/tweets/saved`,
    method: "GET",
  }).then((res) => res.data.data);
};
