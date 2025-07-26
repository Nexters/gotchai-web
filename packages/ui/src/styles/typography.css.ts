import { style, styleVariants } from "@vanilla-extract/css";

export type Size = "xs" | "sm" | "base" | "lg" | "xl";
export type Weight = "normal" | "medium" | "semibold" | "bold";

export const fontSize: Record<Size, string> = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
} as const;

export const fontWeight: Record<Weight, string> = {
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

// Title 기본 스타일
const titleBase = style({
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  fontFamily: fontFamily.sans,
});

// Title variants (1~6) - Title1~4 + SubTitle1~2 통합
export const titleVariant = styleVariants({
  1: [titleBase, { fontSize: "36px" }],
  2: [titleBase, { fontSize: "30px", fontWeight: fontWeight.bold }],
  3: [titleBase, { fontSize: "26px", fontWeight: fontWeight.bold }],
  4: [titleBase, { fontSize: "24px" }],
  5: [titleBase, { fontSize: "22px" }],
  6: [titleBase, { fontSize: "20px" }],
});

