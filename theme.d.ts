import { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: {
      dark: string;
      mediumDark: string;
      medium: string;
      light: string;
      lightest: string;
    };
    customColors: {
      faintest: string;
      brightWater: string;
      pastelWater: string;
      darkShade: string;
      accentDark: string;
    };
  }

  interface PaletteOptions {
    gray?: {
      dark: string;
      mediumDark: string;
      medium: string;
      light: string;
      lightest: string;
    };
    customColors?: {
      faintest: string;
      brightWater: string;
      pastelWater: string;
      darkShade: string;
      accentDark: string;
    };
  }
}
