import styled from "styled-components";
import Spacer from "components/Spacer";
import { Button, Typography } from "@mui/material";
import { getSavedTweets } from "api/tweets";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import { CSVLink } from "react-csv";

const Div = styled.div`
  h2 {
    font-size: 28px;
  }

  .headerContainer {
    max-width: 800px;
    margin: auto;
  }
  .headerContainer--right {
    display: flex;
    justify-content: flex-end;
  }
`;

function SavedScreen() {
  const [tweets, setTweets] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const handleGetTweets = () => {
    getSavedTweets().then((res) => setTweets(res));
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  useEffect(() => {
    const data = [["Author ID", "Trusted", "Text", "Entities", "Created at"]];

    tweets.forEach((el) => {
      data.push([
        el.author_id,
        el.isTrusted,
        el.text,
        el.entityList,
        el.created_at,
      ]);
    });
    setCsvData(data);
  }, [tweets]);

  return (
    <Div>
      <Spacer px={40} />
      <div className="headerContainer">
        <Typography variant="h2">Saved Tweets</Typography>
        <Typography>Lorem ipsum</Typography>
      </div>

      <div className="headerContainer headerContainer--right">
        <CSVLink data={csvData} filename="saved-tweets-OSINT-data">
          <Button variant="outlined">Download CSV</Button>
        </CSVLink>
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
