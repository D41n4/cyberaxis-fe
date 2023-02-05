import styled from "styled-components";
import { NavButton } from "./NavButton";

const Div = styled.div`
  /* border: 1px solid black; */
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export function Aside() {
  return (
    <Div>
      <NavButton label="Home" route="/" />
      <NavButton label="Preferences" route="/preferences" />
      <NavButton label="Saved" route="/saved" />
      <NavButton label="Settings" route="/settings" />
    </Div>
  );
}
