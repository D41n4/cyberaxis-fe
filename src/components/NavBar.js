import { Button, Typography } from "@mui/material";
import { makeLogout } from "api/utils";
import { useAuth } from "state/auth";
import styled from "styled-components";

const Nav = styled.nav`
  height: 40px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .user-name {
    margin-right: 20px;
  }
`;

export function NavBar() {
  const auth = useAuth();

  return (
    <Nav>
      <Typography className="user-name">Welcome, {auth.user?.name}</Typography>
      <Button variant="contained" onClick={makeLogout} size="small">
        LOG OUT
      </Button>
    </Nav>
  );
}
