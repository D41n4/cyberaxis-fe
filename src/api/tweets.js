const { client } = require("./client");

// ----------------------------------------------------
export const topHashtags = () => {
  const path = "/tweets/top-hashtags";
  return client({
    method: "GET",
    url: path,
  }).then((res) => res.data);
};

// ----------------------------------------------------
// @params searchString: string
export const testSearchTweets = (searchString) => {
  const path = `/tweets/test/tweets/search?searchString=${searchString}`;
  return client({
    method: "GET",
    url: path,
  }).then((res) => res.data);
};

// ----------------------------------------------------
// @params searchString: string
export const testQueryTweets = (searchString) => {
  const path = `/tweets/test/tweets/query?searchString=${searchString}`;
  return client({
    method: "GET",
    url: path,
  }).then((res) => res.data);
};
