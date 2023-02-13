import { useState } from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@mui/material";
import Spacer from "components/Spacer/Spacer";
import { makeSignUp } from "api/auth";
import {
  emailRegex,
  passwordErr,
  passwordRegex,
  userNameRegex,
} from "../../../util/misc";
import { useAuth } from "state/auth";
import { setToken } from "api/utils";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { setUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!userNameRegex.test(name)) {
      setError("Name must contain 2-30 characters, only letters");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Email is not valid");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(passwordErr);
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsSubmiting(true);
    makeSignUp({ name, email, password })
      .then((res) => {
        setUser(res.user);
        setToken(res.token);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsSubmiting(false));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        size="small"
        label="Name"
        fullWidth
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Spacer px={20} />
      <TextField
        size="small"
        label="Email"
        type="email"
        id="outlined-required"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Spacer px={20} />
      <TextField
        size="small"
        label="Password"
        type="password"
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Spacer px={20} />
      <TextField
        size="small"
        label="Repeat password"
        type="password"
        fullWidth
        required
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      {error && (
        <>
          <Spacer px={20} />
          <Typography variant="subtitle2" color="error">
            {error}
          </Typography>
        </>
      )}
      <Spacer px={20} />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        disabled={isSubmiting}
      >
        SIGN UP
      </Button>
    </Form>
  );
};
