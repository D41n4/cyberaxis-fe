import styled from "styled-components";
import { NavButton } from "./NavButton";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import { colors } from "util/theme";

const Div = styled.div`
  background-color: ${colors.PRIMARY};
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;

export function Aside() {
  return (
    <Div>
      <NavButton label="Home" icon={<HomeIcon fontSize="small" />} route="/" />
      <NavButton
        label="Preferences"
        icon={<SettingsIcon fontSize="small" />}
        route="/preferences"
      />
      <NavButton
        label="Saved"
        icon={<StarIcon fontSize="small" />}
        route="/saved"
      />
      <NavButton
        label="My Account"
        icon={<PersonIcon fontSize="small" />}
        route="/my-account"
      />
    </Div>
  );
}
