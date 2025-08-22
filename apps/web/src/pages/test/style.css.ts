import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { COLORS } from "@gotchai/ui";
import { hexToRgba } from "@gotchai/ui";

export const progressBadge = style({
  alignSelf: "center",
  padding: "8px 14px",
  borderRadius: "10px",
  marginBottom: "24px",
});

export const questionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "center",
  width: "100%",
});

export const questionText = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  gap: "8px",
});

export const optionsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const optionCard = recipe({
  base: {
    backgroundColor: COLORS.gray[800],
    borderRadius: "16px",
    padding: "20px 20px 20px 16px",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
    minHeight: "108px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "12px",

    "@media": {
      "(hover)": {
        ":hover": {
          transform: "scale(1.05)",
          transition: "transform 0.2s ease-in",
        },
      },
    },
  },
  variants: {
    selected: {
      true: {
        border: `0.5px solid ${hexToRgba(COLORS.green[400], 0.2)}`,
        backgroundColor: hexToRgba(COLORS.green[400], 0.15),
      },
      false: {},
    },
    disabled: {
      true: {
        cursor: "not-allowed",
      },
      false: {
        cursor: "pointer",
      },
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
});

export const optionBadge = recipe({
  base: {
    backgroundColor: COLORS.green[400],
    color: COLORS.black,
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: COLORS.green[400],
      },
      false: {
        backgroundColor: COLORS.gray[500],
      },
    },
  },
  defaultVariants: {
    selected: true,
  },
});

export const optionText = style({
  whiteSpace: "pre-line",
});
