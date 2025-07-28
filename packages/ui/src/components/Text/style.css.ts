import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { COLOR_VARS } from "@/styles";

export const text = recipe({
  base: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "150%",

    fontFamily: "Pretendard, sans-serif",

    textDecoration: "none",

    color: COLOR_VARS.white,
  },

  variants: {
    size: {
      xs: {
        fontSize: 14,
      },
      sm: {
        fontSize: 15,
      },
      lg: {
        fontSize: 16,
      },
      xl: {
        fontSize: 18,
      },
    },

    weight: {
      bold: {
        fontWeight: 700,
      },
      semibold: {
        fontWeight: 600,
      },
      medium: {
        fontWeight: 500,
      },
    },
    lineHeight: {
      normal: {
        lineHeight: "150%",
      },
    },
    fontFamily: {
      sans: {
        fontFamily: "Pretendard, sans-serif",
      },
    },
  },

  defaultVariants: {
    size: "lg",
    weight: "medium",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
