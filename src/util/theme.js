import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const colors = {
  PRIMARY: "#3E7AC9",
  HIGHLIGHT: "#8CC9FF",
  WHITE: "#FFFFFF",
  BACKGROUND: "#EEF0F1",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.PRIMARY,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          ":hover": {
            backgroundColor: colors.HIGHLIGHT,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default responsiveFontSizes(theme);
