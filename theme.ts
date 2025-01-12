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
    gray: {
      darkest: "#373b47",
      dark: "#495057", // Dark Gray
      mediumDark: "#75787B", // Medium Dark Gray
      medium: "#A3A7AA", // Medium Gray
      light: "#D2D6DA", // Light Gray
      lightest: "#F1F1F1", // Lightest Gray
    },
    customColors: {
      faintest: "#EFF0F7", // Faintest Blue
      brightWater: "#E4F0FF", // Bright Water
      pastelWater: "#ADC5E3", // Pastel Water
      darkShade: "#293852", // Dark shade
      accentDark: "#044F79", // Accent Dark
      black: "#262627",
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
    body1Medium: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600, // Semi Bold
      fontSize: "18px",
      letterSpacing: "0px",
    },
    body2Medium: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600, // Medium
      fontSize: "16px",
      letterSpacing: "0%",
    },
    body3: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 400, // Regular
      fontSize: "14px",
      letterSpacing: "0%",
    },
    body3Medium: {
      fontFamily: '"Poppins", "Arial", sans-serif',
      fontWeight: 600, // Semi Bold
      fontSize: "14px",
      letterSpacing: "2%",
    },
    body3ActuallyMedium: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 500, // Medium
      fontSize: "14px",
      letterSpacing: "0%",
    },
  },
});

export default theme;
