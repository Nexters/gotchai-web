import type { CSSProperties } from "@vanilla-extract/css";

export const BREAK_POINTS = {
  mobile: 768,
} as const;

export const media = {
  mobile: (style: CSSProperties) => ({
    "@media": {
      [`(max-width: ${BREAK_POINTS.mobile}px)`]: style,
    },
  }),
};
