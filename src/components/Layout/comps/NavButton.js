import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "util/theme";

const Div = styled.div`
  padding: 4px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${colors.WHITE};

  background-color: ${(props) =>
    props.isActive ? colors.HIGHLIGHT : "transparent"};

  .icon {
    margin-right: 8px;
    height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function NavButton(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Div
      isActive={location.pathname === props.route}
      onClick={() => navigate(props.route)}
    >
      <div className="icon">{props.icon}</div>
      <span>{props.label}</span>
    </Div>
  );
}
