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

  .headerContainer {
    max-width: 800px;
    margin: auto;
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
      <Spacer px={40} />
      <div className="headerContainer">
        <Typography variant="h2">Saved Tweets</Typography>
        <Typography>Lorem ipsum</Typography>
      </div>
      <Spacer px={30} />

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
          entityList={el.entityList}
        />
      ))}
    </Div>
  );
}

export default SavedScreen;
