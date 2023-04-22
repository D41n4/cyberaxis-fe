import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Base from "./Base";
import styled from "styled-components";
import Spacer from "components/Spacer";
import { addTrustedAccount } from "api/user";
import { toast } from "react-toastify";

const Div = styled.div`
  margin: auto;
  max-width: 250px;

  .btn-container {
    display: flex;
    justify-content: flex-end;
  }

  .error {
    color: red;
    font-size: 14px;
  }
`;

const ModalAddTrustedId = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const handleAdd = () => {
    if (name.length > 15) {
      setErr("Name must be less than 15 characters");
      return;
    }
    if (id.length > 30) {
      setErr("ID must be less than 30 characters");
      return;
    }

    setErr("");
    setIsLoading(true);
    addTrustedAccount(id, name)
      .then(() => {
        toast.success("Added successfully");
        props.getAccounts();
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Base onClose={props.onClose}>
      <Div>
        <TextField
          size="small"
          label="ID"
          type="number"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Spacer px={30} />
        <TextField
          size="small"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          InputLabelProps={{ shrink: true }}
        />
        {/* Shroten version of if clause */}
        {err && <span className="error">{err}</span>}
        <Spacer px={20} />
        <div className="btn-container">
          <Button
            variant="contained"
            disabled={!id || !name || isLoading}
            onClick={handleAdd}
          >
            Add
          </Button>
        </div>
      </Div>
    </Base>
  );
};

export default ModalAddTrustedId;
