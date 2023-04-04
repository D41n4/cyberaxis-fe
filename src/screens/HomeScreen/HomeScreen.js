import styled from "styled-components";
import Spacer from "components/Spacer";
import { getTweets } from "api/tweets";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import { Filters, HashTags } from "./comps";

const Div = styled.div``;

function HomeScreen() {
  const [tweets, setTweets] = useState([]);
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [dateFilter, setDateFilter] = useState(0);

  const handleGetTweets = () => {
    getTweets({
      selectedHashtags,
      selectedEntities,
      dateFilter,
      searchString,
    }).then((res) => setTweets(res));
  };

  const manageHashatags = (tag) => {
    if (selectedHashtags.includes(tag)) {
      setSelectedHashtags(selectedHashtags.filter((el) => el !== tag));
    } else {
      setSelectedHashtags([...selectedHashtags, tag]);
    }
  };

  const manageEntities = (entity) => {
    if (selectedEntities.includes(entity)) {
      setSelectedEntities(selectedEntities.filter((el) => el !== entity));
    } else {
      setSelectedEntities([...selectedEntities, entity]);
    }
  };

  useEffect(() => {
    handleGetTweets();
  }, [selectedHashtags, selectedEntities, dateFilter, searchString]);

  return (
    <Div>
      <HashTags
        manageHashatags={manageHashatags}
        selectedHashtags={selectedHashtags}
      />
      <Spacer px={20} />
      <Filters
        manageEntities={manageEntities}
        selectedEntities={selectedEntities}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        searchString={searchString}
        setSearchString={setSearchString}
      />

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
          entityList={el.entityList}
        />
      ))}
    </Div>
  );
}

export default HomeScreen;
