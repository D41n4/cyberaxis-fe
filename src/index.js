import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "util/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "state/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
