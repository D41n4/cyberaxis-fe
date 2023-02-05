import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  padding: 4px 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    /* color: red; */
  }

  background-color: ${(props) =>
    props.isActive ? "rgba(0,0,0,0.1)" : "transparent"};
`;

export function NavButton(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Div
      isActive={location.pathname === props.route}
      onClick={() => navigate(props.route)}
    >
      {props.label}
    </Div>
  );
}
