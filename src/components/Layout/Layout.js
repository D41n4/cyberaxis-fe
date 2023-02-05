import { NavBar } from "components/NavBar";
import Spacer from "components/Spacer";
import styled from "styled-components";
import { colors } from "util/theme";
import { Aside } from "./comps";

const Div = styled.div`
  height: 100vh;
  display: flex;

  .container {
    flex: 1;
    overflow-y: auto;
    background-color: ${colors.BACKGROUND};

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
