import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    gray: {
      50: "#F7F8FA",
      100: "#E3E5E9",
      200: "#C8CAD0",
      300: "#AEB0B7",
      400: "#91939B",
      500: "#6b7280",
      600: "#5D5F66",
      700: "#43454A",
      800: "#2A2B2F",
      900: "#1D1E22",
      950: "#151519",
    },
    green: {
      100: "#F8FFE3",
      200: "#EAFFAA",
      300: "#DBFF71",
      400: "#BFFF00",
      500: "#AAE300",
      600: "#7FAA00",
      700: "#557100",
      800: "#405500",
      900: "#2A3900",
      950: "#151C00",
    },
    blue: "#3388FF",
    red: "#F04D4D",
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
  },
});
