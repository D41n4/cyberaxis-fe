import { Button, TextField, Typography } from "@mui/material";
import { changeName } from "api/user";
import Spacer from "components/Spacer";
import { useState } from "react";
import { userNameRegex } from "util/misc";
import { useAuth } from "state/auth";
import styled from "styled-components";
import { toast } from "react-toastify";
import ModalChangePassword from "components/Modal/ModalChangePassword";
import ModalDeleteAccount from "components/Modal/ModalDeleteAccount";

const Div = styled.div`
  margin: auto;
  max-width: 500px;
  h2 {
    font-size: 28px;
  }

  .row {
    display: grid;
    grid-template-columns: 120px 250px;
    align-items: center;

    .row__end {
      justify-self: flex-end;
      width: 100px;
    }
  }

  .cta {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .error {
    color: red;
  }
`;

const SettingsScreen = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [err, setErr] = useState("");
  const [isPswModalOpen, setIsPswModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleChangeName = () => {
    if (!userNameRegex.test(newName)) {
      setErr("Name must contain 2-30 characters");
      return;
    }
    setErr("");

    setIsLoading(true);
    changeName(newName)
      .then(() => {
        setUser({ ...user, name: newName });
        toast.success("Name changed successfully");
      })
      .catch(() => toast.error("Something went wrong, please try again"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isPswModalOpen && (
        <ModalChangePassword onClose={() => setIsPswModalOpen(false)} />
      )}

      {isDeleteModalOpen && (
        <ModalDeleteAccount onClose={() => setIsDeleteModalOpen(false)} />
      )}
      <Div>
        <Spacer px={40} />
        <Typography variant="h2">My Account Settings</Typography>
        <Spacer px={30} />
        <div className="row">
          <Typography>Email:</Typography>
          <Typography>{user.email}</Typography>
        </div>
        <Spacer px={30} />
        <div className="row">
          <Typography>Name:</Typography>

          <TextField
            size="small"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        {err && (
          <>
            <Spacer px={10} />
            <span className="error"> {err}</span>
          </>
        )}
        <Spacer px={30} />
        <div className="row">
          <div />
          <div className="row__end">
            <Button
              fullWidth
              variant="contained"
              disabled={
                user.name === newName ||
                !userNameRegex.test(newName) ||
                isLoading
              }
              onClick={handleChangeName}
            >
              Save
            </Button>
          </div>
        </div>
        <Spacer px={30} />
        <Typography
          onClick={() => setIsPswModalOpen(true)}
          className="cta"
          fontWeight="bold"
        >
          Change password
        </Typography>
        <Spacer px={10} />
        <Typography
          onClick={() => setIsDeleteModalOpen(true)}
          className="cta"
          fontWeight="bold"
        >
          Delete account
        </Typography>
      </Div>
    </>
  );
};

export default SettingsScreen;
