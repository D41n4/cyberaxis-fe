import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import { SignInForm, SignUpForm } from "./comps";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Spacer from "components/Spacer";

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthScreen = () => {
  const [formType, setFormType] = useState(true);
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Div>
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
        >
          Sign up
        </Button>
      </ButtonGroup>
      <Spacer px={40} />
      {formType ? <SignInForm /> : <SignUpForm />}
    </Div>
  );
};

export default AuthScreen;
