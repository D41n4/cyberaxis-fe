import styled from "styled-components";
import Spacer from "components/Spacer";
import { Typography } from "@mui/material";
import { getSavedTweets } from "api/tweets";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";

const Div = styled.div`
  h2 {
    font-size: 28px;
  }
`;

function SavedScreen() {
  const [tweets, setTweets] = useState([]);

  const handleGetTweets = () => {
    getSavedTweets().then((res) => setTweets(res));
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  return (
    <Div>
      <Typography variant="h2">Saved Tweets</Typography>
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

export default SavedScreen;
