import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;

  background: linear-gradient(-45deg, #8cc9ff, #fff, #3e7ac9, #236ad5);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Background = () => {
  return <Div />;
};

export default Background;
