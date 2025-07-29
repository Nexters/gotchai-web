import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

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
  border: "1px solid rgba(255, 255, 255, 0.2)",
});

export const cardLinearBackground = style({
  background: "linear-gradient(135deg, #DEDFD0 100%, #9EA481 100%)",
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
      gold: {
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            rgba(250, 227, 79, 1) 0%, 
            rgba(250, 227, 79, 0) 100%
          )
        `,
      },
      silver: {
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            rgba(116, 137, 239, 1) 0%, 
            rgba(116, 137, 239, 0) 100%
          )
        `,
      },
      bronze: {
        background: `
          radial-gradient(
            circle closest-corner at center 110%, 
            rgba(231, 150, 73, 1) 0%, 
            rgba(231, 150, 73, 0) 100%
          )
        `,
      },
    },
  },
  defaultVariants: {
    result: "gold",
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
  color: "rgba(255, 255, 255, 0.7)",
});

export const cardLogo = style({
  width: "56px",
  height: "11px",
  marginTop: "9px",
});

export type CardRadialGradientVariants = RecipeVariants<
  typeof cardRadialGradient
>;
