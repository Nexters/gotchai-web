import { fontFace, globalStyle } from "@vanilla-extract/css";

const pretentard = fontFace({
  src: "url('/fonts/PretendardVariable.woff2') format('woff2-variations')",
  fontWeight: "100 900",
  fontStyle: "normal",
});

globalStyle(":root", {
  fontFamily: pretentard,
});
