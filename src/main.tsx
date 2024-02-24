import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Container } from "@mui/material";
import ThemeProvider from "./providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Container maxWidth="xl">
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
