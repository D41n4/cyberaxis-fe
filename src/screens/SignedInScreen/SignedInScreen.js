import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import { NavBar } from "./comps";
import styled from "styled-components";
import Spacer from "components/Spacer";
import { testSearchTweets } from "api/tweets";

const Div = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`;

function SignedInScreen() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  const handleClick = () => {
    testSearchTweets(searchString)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <Div>
        <TextField
          fullWidth
          label="Search"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <Spacer px={10} />
        <Button fullWidth variant="contained" onClick={handleClick}>
          RUN
        </Button>
      </Div>
    </>
  );
}

export default SignedInScreen;
