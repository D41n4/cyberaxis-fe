const { client } = require("./client");

// ----------------------------------------------------
// @params searchString: string
export const testSearchTweets = (searchString) => {
  const path = `/tweets/test/tweets/search?searchString=${searchString}`;
  return client({
    method: "GET",
    url: path,
  }).then((res) => res.data);
};
