const { client } = require("./client");

// ----------------------------------------------------
export const topHashtags = () => {
  return client({
    url: "/tweets/top-hashtags",
    method: "GET",
  }).then((res) => res.data);
};

// ----------------------------------------------------
// @params searchString: string
export const testSearchTweets = (searchString) => {
  return client({
    url: `/tweets/test/tweets/search?searchString=${searchString}`,
    method: "GET",
  }).then((res) => res.data);
};

// ----------------------------------------------------
// @params searchString: string
export const testQueryTweets = (searchString) => {
  return client({
    url: `/tweets/test/tweets/query?searchString=${searchString}`,
    method: "GET",
  }).then((res) => res.data);
};
