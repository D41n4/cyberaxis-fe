import styled from "styled-components";
import Spacer from "components/Spacer";
import { Button, TextField } from "@mui/material";
import { getTweets } from "api/tweets";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import { HashTags } from "./comps";

const Div = styled.div``;

function HomeScreen() {
  const [tweets, setTweets] = useState([]);

  const handleGetTweets = () => {
    getTweets().then((res) => setTweets(res));
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  return (
    <Div>
      <HashTags />

      <Spacer px={50} />

      {tweets.map((el) => (
        <Tweet
          key={el._id}
          text={el.text}
          urls={el.urls}
          isTrusted={el.isTrusted}
          authorId={el.author_id}
          id={el._id}
          isFavourite={el.isFavourite}
          handleGetTweets={handleGetTweets}
          created_at={el.created_at}
        />
      ))}
    </Div>
  );
}

export default HomeScreen;
