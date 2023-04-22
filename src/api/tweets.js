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
  sourceFilter,
}) => {
  return client({
    // url: `/tweets?selectedHashtags=${selectedHashtags}&selectedEntities=${selectedEntities}&dateFilter=${dateFilter}&searchString=${searchString}&sourceFilter=${sourceFilter}`,
    // url query params encoder
    url: `/tweets${encodeQueryParams({
      selectedHashtags,
      selectedEntities,
      dateFilter,
      searchString,
      sourceFilter,
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
