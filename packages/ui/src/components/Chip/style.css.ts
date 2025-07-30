import { COLORS, getColorValue } from "@/styles";
import { hexToRgba } from "@/utils/hexToRgba";
import { recipe } from "@vanilla-extract/recipes";
import { keys } from "es-toolkit/compat";

export const chip = recipe({
  base: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 10,
  },

  variants: {
    color: Object.fromEntries(
      (keys(COLORS) as Array<keyof typeof COLORS>).map((colorKey) => [
        colorKey,
        {
          backgroundColor: hexToRgba(getColorValue(colorKey), 0.1),
          color: getColorValue(colorKey),
        },
      ])
    ),
  },

  defaultVariants: {
    color: "green",
  },
});
