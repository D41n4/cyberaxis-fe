import styled from "styled-components";

const Div = styled.div`
  height: 400px;
  width: 50vw;
  border: 1px solid red;
`;

function TestComp() {
  return (
    <Div>
      <h1>lol</h1>
    </Div>
  );
}

export default TestComp;
