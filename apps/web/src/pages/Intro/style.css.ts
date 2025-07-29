import { media } from "@gotchai/ui";
import { style } from "@vanilla-extract/css";

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
});

export const image = style({
  width: 300,

  ...media.mobile({
    maxWidth: 300,
    width: "100%",
  }),
});

export const message = style({
  textAlign: "center",
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
});
