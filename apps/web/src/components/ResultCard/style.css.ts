import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { hexToRgba } from "@gotchai/ui";
import { BACKGROUND_GRADIENTS, CONTENT_COLORS, CardResult } from "./cardConfig";
import { COLORS } from "@gotchai/ui";

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
  background: `linear-gradient(120deg, ${BACKGROUND_GRADIENTS.LEFT_TOP} 0%, ${BACKGROUND_GRADIENTS.RIGHT_BOTTOM} 100%)`,
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
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.GOLD].subTitle, 1)} 0%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.GOLD].subTitle, 0)} 100%
          )
        `,
      },
      [CardResult.SILVER]: {
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.SILVER].subTitle, 1)} 0%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.SILVER].subTitle, 0)} 100%
          )
        `,
      },
      [CardResult.BRONZE]: {
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.BRONZE].subTitle, 1)} 0%, 
            ${hexToRgba(CONTENT_COLORS[CardResult.BRONZE].subTitle, 0)} 100%
          )
        `,
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
