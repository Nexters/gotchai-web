import { keyframes, style } from "@vanilla-extract/css";
import { COLOR_VARS } from "@gotchai/ui";

const textMaskAnimation = keyframes({
  "0%": {
    WebkitMaskSize: "0% 100%",
    maskSize: "0% 100%",
    backgroundSize: "0% 100%",
  },
  "100%": {
    WebkitMaskSize: "220% 100%",
    maskSize: "220% 100%",
    backgroundSize: "220% 100%",
  },
});

export const loadingContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 24,
  alignItems: "center",
  paddingBottom: 40,
});

export const loadingPlaceholder = style({
  borderRadius: 10,
  backgroundColor: COLOR_VARS.gray[800],
  width: 320,
  height: 218,
});

export const textContainer = style({
  position: "relative",
});

export const textBackground = style({
  position: "absolute",
  color: COLOR_VARS.gray[500],
});

export const textOutline = style({
  WebkitTextStroke: "1px transparent",
  background: `linear-gradient(90deg, ${COLOR_VARS.green[400]} 0%, #2487FF 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  WebkitMaskImage:
    "linear-gradient(to right, black 0%, black calc(100% - 30px), transparent 100%)",
  maskImage:
    "linear-gradient(to right, black 0%, black calc(100% - 30px), transparent 100%)",
  WebkitMaskPosition: "0% 0px",
  maskPosition: "0% 0px",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  animation: `${textMaskAnimation} 3s ease-in-out infinite`,
});
