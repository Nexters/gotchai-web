import { style } from "@vanilla-extract/css";

export const fontSize = {
  "3xs": "14px",
  "2xs": "15px",
  xs: "16px",
  sm: "18px",
  base: "20px",
  lg: "22px",
  xl: "24px",
  "2xl": "26px",
  "3xl": "30px",
  "4xl": "36px",
} as const;

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const lineHeight = {
  normal: "1.5",
} as const;

export const fontFamily = {
  sans: "Pretendard, sans-serif",
} as const;

export const Typography = {
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
} as const;

export const Title1 = style({
  fontSize: fontSize["4xl"],
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Title2 = style({
  fontSize: fontSize["3xl"],
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Title3 = style({
  fontSize: fontSize["2xl"],
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Title4 = style({
  fontSize: fontSize["xl"],
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const SubTitle1 = style({
  fontSize: fontSize["lg"],
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const SubTitle2 = style({
  fontSize: fontSize["base"],
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Body1 = style({
  fontSize: fontSize.sm,
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Body2 = style({
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Body3 = style({
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Body4 = style({
  fontSize: fontSize["2xs"],
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

export const Body5 = style({
  fontSize: fontSize["3xs"],
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});
