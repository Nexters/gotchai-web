import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
});

export const downloadSection = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
});
