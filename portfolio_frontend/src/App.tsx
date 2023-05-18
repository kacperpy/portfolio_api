import React from "react";
import "./styles/App.css";
import { createCustomTheme } from "./utils/createCustomTheme";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import { UpperBar } from "./components/UpperBar/UpperBar";

function App() {
  const theme = createCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UpperBar />
        <Typography>Valeriano di Domenico</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
