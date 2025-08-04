import { style, keyframes } from "@vanilla-extract/css";
import { COLORS } from "@gotchai/ui";

/* 모달 슬라이드 인 */
const modalSlideIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.9) translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1) translateY(0)",
  },
});

export const modalContent = style({
  width: "100%",
  padding: "40px 24px 24px 24px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: 1,
  outline: "none",
  transform: "scale(1)",
  animation: `${modalSlideIn} 0.2s cubic-bezier(0.4, 0, 0.2, 1)`,
});

export const iconContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const titleContainer = style({
  width: "100%",
  marginTop: "24px",
});

export const divider = style({
  width: "100%",
  height: "0.6px",
  backgroundColor: COLORS.gray[600],
});

export const answerContainer = style({
  width: "100%",
  backgroundColor: COLORS.gray[800],
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  marginTop: "16px",
  alignItems: "center",
  textAlign: "center",
  padding: "12px 16px",
  boxSizing: "border-box",
  gap: "6px",
});

export const buttonContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const nextButton = style({
  marginTop: "32px",
});
