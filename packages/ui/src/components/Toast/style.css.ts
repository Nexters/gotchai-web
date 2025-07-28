import { COLOR_VARS } from "@/styles";
import { media } from "@/styles/media";
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

  ...media.mobile({
    borderRadius: 40,
    fontSize: 14,
  }),
});

export const toastIcon = style({
  width: 24,
  height: 24,
  borderRadius: 2,
  backgroundColor: COLOR_VARS.gray[400],
  verticalAlign: "middle",

  ...media.mobile({
    width: 16,
    height: 16,
  }),
});

export const toastContainer = style({
  vars: {
    "--toastify-toast-width": "fit-content",
  },
});
