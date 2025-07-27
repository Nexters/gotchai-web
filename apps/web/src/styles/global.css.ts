import { COLORS } from "@gotchai/ui";
import { globalStyle } from "@vanilla-extract/css";

import { pretentard } from "./fonts.css";

globalStyle(":root", {
  fontFamily: pretentard,
  backgroundColor: COLORS.gray[950],
});
