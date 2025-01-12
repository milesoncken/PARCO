import { useState } from "react";
import TSP from "./screens/tsp/TSP";
import "./App.css";
import theme from "../theme";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TSP />
    </ThemeProvider>
  );
}

export default App;
