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

  .user-email {
    margin-right: 20px;
  }
`;

export function NavBar() {
  const auth = useAuth();

  return (
    <Nav>
      <Typography className="user-email">{auth.user?.email}</Typography>
      <Button variant="contained" onClick={makeLogout} size="small">
        LOG OUT
      </Button>
    </Nav>
  );
}
