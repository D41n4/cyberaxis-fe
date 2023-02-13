import { Button, TextField } from "@mui/material";
import Spacer from "components/Spacer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { passwordErr, passwordRegex } from "util/misc";
import Base from "./Base";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { changePassword } from "api/user";
import { toast } from "react-toastify";

const Div = styled.div`
  margin: auto;
  max-width: 250px;
`;

const ModalChangePassword = (props) => {
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const regextPass = passwordRegex.test(newPassword);
    const matchPass = newPassword === confirmNewPassword;

    if (regextPass && matchPass && existingPassword) {
      setIsValid(true);
    } else setIsValid(false);
  }, [newPassword, confirmNewPassword, existingPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    changePassword(existingPassword, newPassword)
      .then(() => toast.success("Password changed successfully"))
      .catch((err) => {
        // TODO err message not received
        toast.error(err.message);
      })
      .finally(() => setIsSubmiting(false));
  };

  return (
    <Base onClose={props.onClose}>
      <Div>
        <form onSubmit={handleSubmit}>
          <TextField
            size="small"
            label="Existing Password"
            type="password"
            fullWidth
            required
            value={existingPassword}
            onChange={(e) => setExistingPassword(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Spacer px={20} />
          <TextField
            size="small"
            label="New Password"
            type="password"
            fullWidth
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Spacer px={20} />
          <TextField
            size="small"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Spacer px={10} />
          <Tooltip title={passwordErr} placement="top-start">
            <InfoIcon color="primary" fontSize="small" />
          </Tooltip>
          <Spacer px={10} />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={isSubmiting || !isValid}
          >
            Change Password
          </Button>
        </form>
      </Div>
    </Base>
  );
};

export default ModalChangePassword;
