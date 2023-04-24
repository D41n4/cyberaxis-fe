import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import { SignInForm, SignUpForm } from "./comps";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Spacer from "components/Spacer";
import { Typography } from "@mui/material";
import { colors } from "util/theme";
import Background from "./comps/Background";

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .contents {
    padding: 45px;
    /* border: 1px solid red; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);

    /* backdrop-filter: blur(10px) grayscale(0.5); */
    filter: drop-shadow(0px 0px 20px ${colors.PRIMARY});
    .header {
      font-size: 30px;
    }
  }
`;

const AuthScreen = () => {
  const [formType, setFormType] = useState(true);
  // destructure user from useAuth
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Div>
      <Background />
      <div className="contents">
        <Typography variant="h1" className="header">
          Welcome to CyberTweets
        </Typography>
        <Spacer px={10} />
        <Typography>
          Login or create an account to access latest Cybersecurity news
        </Typography>
        <Spacer px={30} />
        <ButtonGroup>
          <Button
            variant={formType ? "contained" : "outlined"}
            onClick={() => setFormType(true)}
          >
            Sign in
          </Button>
          <Button
            variant={!formType ? "contained" : "outlined"}
            onClick={() => setFormType(false)}
            data-cy="sign-up-button"
          >
            Sign up
          </Button>
        </ButtonGroup>
        <Spacer px={40} />
        {formType ? <SignInForm /> : <SignUpForm />}
      </div>
    </Div>
  );
};

export default AuthScreen;
