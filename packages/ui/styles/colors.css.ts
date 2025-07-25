import { createGlobalTheme } from "@vanilla-extract/css";

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  50: "#F7F8FA",
  100: "#E3E5E9",
  200: "#C8CAD0",
  300: "#AEB0B7",
  400: "#91939B",
  500: "#767880",
  600: "#5D5F66",
  700: "#43454A",
  800: "#2A2B2F",
  850: "#232429",
  900: "#1D1E22",
  950: "#1D1E22",
} as const;

export const globalTheme = createGlobalTheme(":root", {
  colors: {
    white: colors.white,
    black: colors.black,
    gray50: colors[50],
    gray100: colors[100],
    gray200: colors[200],
    gray300: colors[300],
    gray400: colors[400],
    gray500: colors[500],
    gray600: colors[600],
    gray700: colors[700],
    gray800: colors[800],
    gray850: colors[850],
    gray900: colors[900],
    gray950: colors[950],
  },
});
