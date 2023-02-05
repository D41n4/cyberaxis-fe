import styled from "styled-components";

const Div = styled.div`
  border: 1px solid red;
  flex: 1;
  max-width: 800px;
  margin: auto;
  margin-bottom: 10px;
`;

function Tweet(props) {
  return <Div>{props.text}</Div>;
}

export default Tweet;
