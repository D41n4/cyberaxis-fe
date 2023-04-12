import styled from "styled-components";
import { colors } from "util/theme";

export const Tag = styled.div`
  padding: 2px 4px;
  margin: 3px 8px 3px 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  background-color: ${({ isSelected }) =>
    !isSelected ? colors.PRIMARY : colors.HIGHLIGHT};
`;
