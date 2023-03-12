import { topHashtags } from "api/tweets";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "util/theme";

const Div = styled.div`
  border: 1px solid red;
  display: grid;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 5px 12px;
  margin: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  background-color: ${({ isSelected }) =>
    isSelected ? colors.PRIMARY : colors.HIGHLIGHT};
`;

export function HashTags({ manageHashatags, selectedHashtags }) {
  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    topHashtags().then((res) => {
      setHashTags(res);
    });
  }, []);

  return (
    <Div>
      {hashTags.map((el, idx) => (
        <Tag
          key={el.hashtag}
          onClick={() => manageHashatags(el.hashtag)}
          isSelected={selectedHashtags.includes(el.hashtag)}
        >
          #{idx + 1} {el.hashtag}
        </Tag>
      ))}
    </Div>
  );
}
