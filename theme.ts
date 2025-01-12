import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0671AD", // Parco Blue
    },
    secondary: {
      main: "#3498DB", // Secondary Blue
      dark: "#344767", // Secondary - DARK
      light: "#E4F0FF", // Faintest Blue (light)
    },
    background: {
      default: "#fff", // Light background
      paper: "#EFF0F7", // Slightly darker background
    },
    info: {
      main: "#BAC8E5", // Highlight
    },
    action: {
      selected: "#21B8FD", // Parco Highlight Real
    },
  },

  typography: {
    fontFamily: '"Inter", "Arial", sans-serif', // Set default font family
    h1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 300, // Light
      fontSize: "96px",
      lineHeight: "116.7%",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 700, // Bold
      fontSize: "40px",
      lineHeight: "116.7%",
      letterSpacing: "0px",
    },
    h3: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600, // Semi Bold
      fontSize: "32px",
      lineHeight: "116.7%",
      letterSpacing: "0px",
    },
    h4: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600, // Semi Bold
      fontSize: "24px",
      lineHeight: "133.4%",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 500, // Medium
      fontSize: "24px",
      lineHeight: "133.4%",
      letterSpacing: "0px",
    },
    body1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 400, // Regular
      fontSize: "18px",
      letterSpacing: "0px",
    },
    body2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 400, // Regular
      fontSize: "16px",
      letterSpacing: "0%",
    },
  },
});

export default theme;
