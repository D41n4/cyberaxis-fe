import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import Spacer from "components/Spacer";

const Div = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px) grayscale(0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    background-color: white;
    padding: 20px 20px 40px 20px;
    border-radius: 8px;
    min-width: 400px;
    margin: 0 20px;

    .close {
      display: flex;
      justify-content: flex-end;
      .close-btn {
        cursor: pointer;
      }
    }
  }
`;

const Base = (props) => {
  return (
    <Div onClick={props.onClose}>
      <div
        className="wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="close">
          <ClearIcon className="close-btn" onClick={props.onClose} />
        </div>
        <Spacer px={20} />
        {props.children}
      </div>
    </Div>
  );
};

export default Base;
