import { COLOR_VARS } from "@/styles";
import { style } from "@vanilla-extract/css";

export const toast = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  backgroundColor: COLOR_VARS.gray[800],
  padding: "16px 20px",
  borderRadius: 16,
  margin: 0,
});

export const toastIcon = style({
  width: 24,
  height: 24,
  borderRadius: 2,
  backgroundColor: COLOR_VARS.gray[400],
  verticalAlign: "middle",
});

export const toastContainer = style({
  // @ts-expect-error - CSS custom property not supported by vanilla-extract types
  "--toastify-toast-width": "fit-content",
});
