import { topHashtags } from "api/tweets";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid red;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px; */
  display: flex;
  flex-wrap: wrap;

  .tag {
    padding: 5px 12px;
    margin: 4px 8px;
    background-color: gray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export function HashTags() {
  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    topHashtags().then((res) => {
      setHashTags(res.hashtags);
      console.log(res);
    });
  }, []);

  return (
    <Div>
      {hashTags.map((el, idx) => (
        <div key={el._id} className="tag">
          #{idx + 1} {el._id}
        </div>
      ))}
    </Div>
  );
}
