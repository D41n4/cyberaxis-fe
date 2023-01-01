import styled, { css } from "styled-components";

const Spacer = styled.div`
  height: ${({ px }) => px}px;

  ${({ horizontal, px }) =>
    horizontal &&
    css`
      width: ${px}px;
    `};

  ${({ debug }) =>
    debug &&
    css`
      border: 1px solid red;
    `};
`;

export default Spacer;
