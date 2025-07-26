import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { COLORS } from "@/styles/colors";

export const title = recipe({
  base: {
    fontWeight: 600,
    lineHeight: "150%",
    fontFamily: "Pretendard, sans-serif",
    color: COLORS.black,
  },

  variants: {
    order: {
      1: {
        fontSize: 36,
        fontWeight: 600,
      },
      2: {
        fontSize: 30,
        fontWeight: 700,
      },
      3: {
        fontSize: 26,
        fontWeight: 700,
      },
      4: {
        fontSize: 24,
        fontWeight: 600,
      },
      5: {
        fontSize: 22,
        fontWeight: 600,
      },
      6: {
        fontSize: 20,
        fontWeight: 600,
      },
    },
  },

  defaultVariants: {
    order: 1,
  },
});

export type TitleVariants = RecipeVariants<typeof title>;
