import { useState } from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@mui/material";
import Spacer from "components/Spacer/Spacer";
import { makeLogin } from "api/auth";
import { passwordErr, passwordRegex } from "../misc";
import { useAuth } from "state/auth";
import { setToken } from "api/utils";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { setUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (passwordRegex.test(password)) {
      setIsSubmiting(true);

      makeLogin({ email, password })
        .then((res) => {
          setUser(res.user);
          setToken(res.token);
        })
        .catch((err) => setError(err.message))
        .finally(() => setIsSubmiting(false));
    } else {
      setError(passwordErr);
      setIsSubmiting();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        size="small"
        label="Email"
        type="email"
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
        SIGN IN
      </Button>
    </Form>
  );
};
