import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px) grayscale(0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 600px;
    margin: 0 20px;
  }
`;

const Base = () => {
  return (
    <Div>
      <div className="wrapper"></div>
    </Div>
  );
};

export default Base;
