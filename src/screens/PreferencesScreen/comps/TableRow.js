import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteTrustedAccount } from "api/user";
import { toast } from "react-toastify";

const Div = styled.div`
  display: grid;
  grid-template-columns: 180px auto 50px;
  align-items: center;
  background-color: ${(props) => (props.isOdd ? "white" : "rgba(0,0,0,0.05)")};

  .item {
    padding: 4px 8px;
    font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
    .icon--default {
      color: green;
    }
    .icon--delete {
      color: red;
      cursor: pointer;
    }
  }
`;

export const TableRow = (props) => {
  const handleDelete = () => {
    deleteTrustedAccount(props.id)
      .then(() => {
        toast.success("Deleted!");
        props.getAccounts();
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <Div isOdd={props.isOdd} isBold={props.isBold}>
      <div className="item">{props.id}</div>
      <div className="item">{props.name}</div>
      {props.isDefault !== null && (
        <div className="item">
          {props.isDefault ? (
            <CheckCircleIcon fontSize="small" className="icon--default" />
          ) : (
            <DeleteForeverIcon
              fontSize="small"
              className="icon--delete"
              onClick={handleDelete}
            />
          )}
        </div>
      )}
    </Div>
  );
};
