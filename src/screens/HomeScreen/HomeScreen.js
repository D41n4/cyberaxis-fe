import styled from "styled-components";
import Spacer from "components/Spacer";
import { Button, TextField } from "@mui/material";
import { testQueryTweets, testSearchTweets } from "api/tweets";
import { useState } from "react";
import Tweet from "components/Tweet";
import { HashTags } from "./comps";

const Div = styled.div`
  .tweets-container {
    /* border: 1px solid black; */
    width: 100%;
  }
`;

function HomeScreen() {
  const [searchString, setSearchString] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleClickSearch = () => {
    testSearchTweets(searchString)
      .then((res) => {
        console.log(res);
        setTweets(res.tweets);
      })
      .catch((err) => console.log(err));
  };

  const handleClickQuery = () => {
    testQueryTweets(searchString)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Div>
      <HashTags />
      <div className="panel">
        <TextField
          fullWidth
          label="Search"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <Spacer px={10} />
        <Button fullWidth variant="contained" onClick={handleClickSearch}>
          SEARCH
        </Button>
        <Spacer px={10} />
        <Button fullWidth variant="contained" onClick={handleClickQuery}>
          QUERY
        </Button>
      </div>

      <Spacer px={50} />
      <div className="tweets-container">
        {tweets.map((el) => (
          <Tweet key={el.id} text={el.text} />
        ))}
      </div>
    </Div>
  );
}

export default HomeScreen;
