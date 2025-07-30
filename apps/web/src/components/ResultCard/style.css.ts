import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { hexToRgba } from "@gotchai/ui";
import { BACKGROUND_GRADIENTS, CONTENT_COLORS, CardResult } from "./cardConfig";
import { COLORS } from "@gotchai/ui";
import { getLinearGradient, getRadialGradient } from "../../utils/colorUtils";

export const cardContainer = style({
  width: "100%",
  maxWidth: "320px",
  margin: "0 auto",
  padding: "34px 34px 27px 34px",
  boxSizing: "border-box",
  height: "481px",
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  border: `1px solid ${hexToRgba(COLORS.white, 0.2)}`,
});

export const cardLinearBackground = style({
  background: getLinearGradient(
    135,
    BACKGROUND_GRADIENTS.LEFT_TOP,
    BACKGROUND_GRADIENTS.RIGHT_BOTTOM
  ),
  opacity: 0.2,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
});

export const cardRadialGradient = recipe({
  base: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0.2,
    zIndex: 0,
    pointerEvents: "none",
  },
  variants: {
    result: {
      [CardResult.GOLD]: {
        background: getRadialGradient(
          CONTENT_COLORS[CardResult.GOLD].subTitle,
          1
        ),
      },
      [CardResult.SILVER]: {
        background: getRadialGradient(
          CONTENT_COLORS[CardResult.SILVER].subTitle,
          1
        ),
      },
      [CardResult.BRONZE]: {
        background: getRadialGradient(
          CONTENT_COLORS[CardResult.BRONZE].subTitle,
          1
        ),
      },
    },
  },
  defaultVariants: {
    result: CardResult.GOLD,
  },
});

export const cardContent = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 3,
});

export const cardImage = style({
  width: "213px",
  height: "213px",
  borderRadius: "50%",
  marginTop: "26px",
  marginBottom: "26px",
  objectFit: "cover",
});

export const cardText = style({
  marginTop: "16px",
  whiteSpace: "pre-line",
  textAlign: "center",
  color: hexToRgba(COLORS.white, 0.7),
});

export const cardLogo = style({
  width: "56px",
  height: "11px",
  marginTop: "9px",
});

export type CardRadialGradientVariants = RecipeVariants<
  typeof cardRadialGradient
>;
