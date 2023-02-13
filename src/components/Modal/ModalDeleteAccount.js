import { Button, Typography } from "@mui/material";
import Spacer from "components/Spacer";
import { useState } from "react";
import styled from "styled-components";
import Base from "./Base";
import { toast } from "react-toastify";
import { deleteAccount } from "api/user";
import { makeLogout } from "api/utils";

const Div = styled.div`
  margin: auto;
  max-width: 250px;

  .btn-container {
    display: flex;
    .spacer {
      width: 20px;
    }
  }
`;

const ModalDeleteAccount = (props) => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    deleteAccount()
      .then(() => makeLogout())
      .catch((err) => {
        // TODO err message not received
        toast.error(err.message);
        console.log(err);
      })
      .finally(() => setIsSubmiting(false));
  };

  return (
    <Base onClose={props.onClose}>
      <Div>
        <Typography>Are you sure?</Typography>
        <Typography variant="body2">This action cannot be undone.</Typography>
        <Spacer px={20} />
        <div className="btn-container">
          <Button
            onClick={handleSubmit}
            size="small"
            variant="outlined"
            fullWidth
            disabled={isSubmiting}
          >
            Yes
          </Button>
          <div className="spacer" />
          <Button
            onClick={props.onClose}
            size="small"
            variant="outlined"
            fullWidth
          >
            No
          </Button>
        </div>
      </Div>
    </Base>
  );
};

export default ModalDeleteAccount;
