import { media } from "@gotchai/ui";
import { style } from "@vanilla-extract/css";

export const layout = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 32,
  boxSizing: "border-box",

  ...media.mobile({
    padding: 20,
  }),
});

export const wrapper = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const container = style({
  maxWidth: 420,
  width: "100%",
  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const logo = style({
  maxWidth: 420,
  margin: "0 auto",
  height: 28,

  ...media.mobile({
    height: 20,
  }),
});
