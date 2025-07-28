import { style } from "@vanilla-extract/css";
import { COLORS } from "@gotchai/ui";

export const modalContent = style({
  width: "90%",
  padding: "32px 12px 12px 12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: 1,
  outline: "none",
});

export const iconContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const divider = style({
  width: "100%",
  height: "0.6px",
  backgroundColor: COLORS.gray[600],
});

export const answerContainer = style({
  width: "90%",
  backgroundColor: COLORS.gray[800],
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "center",
  textAlign: "center",
  padding: "12px 16px",
  gap: "6px",
});
