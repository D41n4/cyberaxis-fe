import { Typography } from "@mui/material";
import { topHashtags } from "api/tweets";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Tag } from "./Tag";

const Div = styled.div`
  /* border: 1px solid gray; */
  display: grid;
  display: flex;
  flex-wrap: wrap;
`;

export function HashTags({ manageHashatags, selectedHashtags }) {
  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    topHashtags().then((res) => {
      setHashTags(res);
    });
  }, []);

  return (
    <>
      <Typography fontWeight={500}>Filter by hashtags:</Typography>
      <Div>
        {hashTags.map((el, idx) => (
          <Tag
            key={el.hashtag}
            onClick={() => manageHashatags(el.hashtag)}
            isSelected={selectedHashtags.includes(el.hashtag)}
          >
            <Typography variant="body2">
              #{idx + 1} {el.hashtag}
            </Typography>
          </Tag>
        ))}
      </Div>
    </>
  );
}
