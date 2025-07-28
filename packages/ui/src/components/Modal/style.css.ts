import { style } from "@vanilla-extract/css";
import { COLORS } from "@/styles";

export const overlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
  zIndex: 1000,
});

export const content = style({
  backgroundColor: COLORS.gray[900],
  borderRadius: "20px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
  width: "95vw",
  maxWidth: "320px",
  maxHeight: "524px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  opacity: 1,
  outline: "none",
  zIndex: 1001,
});
