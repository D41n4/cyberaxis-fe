import { Button, TextField, Typography } from "@mui/material";
import { changeName, getTrustedAccounts } from "api/user";
import Spacer from "components/Spacer";
import { useEffect, useState } from "react";
import { userNameRegex } from "util/misc";
import { useAuth } from "state/auth";
import styled from "styled-components";
import { toast } from "react-toastify";
import { TableRow } from "./comps/TableRow";
import ModalAddTrustedId from "components/Modal/ModalAddTrustedId";

const Div = styled.div`
  margin: auto;
  max-width: 800px;
  h2 {
    font-size: 28px;
  }

  .table {
    border: 1px solid gray;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
`;

function isOdd(num) {
  return num % 2 === 1;
}

const PreferencesScreen = () => {
  const [trustedAccounts, setTrustedAccounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAccounts = () => {
    getTrustedAccounts().then((res) => setTrustedAccounts(res));
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <>
      {isModalOpen && (
        <ModalAddTrustedId
          onClose={() => setIsModalOpen(false)}
          getAccounts={getAccounts}
        />
      )}
      <Div>
        <Spacer px={60} />
        <Typography variant="h2">Trusted Twitter Accounts</Typography>
        <Spacer px={60} />
        <div className="table">
          <TableRow id="ID" name="NAME" isDefault={null} isBold />
          {trustedAccounts.map((el, idx) => (
            <TableRow
              key={el.id}
              isOdd={!isOdd(idx)}
              id={el.id}
              name={el.name}
              isDefault={el.isDefault}
              getAccounts={getAccounts}
            />
          ))}
        </div>
        <Spacer px={30} />
        <div className="btn-container">
          <Button variant="contained" onClick={() => setIsModalOpen(true)}>
            Add
          </Button>
        </div>
        <Spacer px={60} />
      </Div>
    </>
  );
};

export default PreferencesScreen;
