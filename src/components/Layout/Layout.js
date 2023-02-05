import Spacer from "components/Spacer";
import { NavBar } from "screens/SignedInScreen/comps";
import styled from "styled-components";
import { Aside } from "./comps";

const Div = styled.div`
  height: 100vh;
  display: flex;

  .container {
    flex: 1;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.05);

    main {
      max-width: 1200px;
      margin: auto;
      background-color: white;
      padding: 10px;
      min-height: calc(100% - 100px);
    }
  }
`;

function Layout(props) {
  return (
    <Div>
      <Aside />
      <div className="container">
        <NavBar />
        <Spacer px={20} />
        <main>{props.children}</main>
        <Spacer px={20} />
      </div>
    </Div>
  );
}

export default Layout;
