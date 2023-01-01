import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const colors = {};

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: "none" } },
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default responsiveFontSizes(theme);
