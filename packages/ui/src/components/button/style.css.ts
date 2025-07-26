import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { COLORS } from "@/styles/colors";

export const button = recipe({
  base: {
    borderRadius: 16,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    border: "none",

    cursor: "pointer",

    textDecoration: "none",
    fontWeight: 400,

    /** @TODO: Add hover, active, disabled, focus styles */
    ":hover": {},
    ":active": {},
    ":disabled": {},
    ":focus": {},
  },

  variants: {
    variant: {
      default: {
        backgroundColor: COLORS.gray[50],
        color: COLORS.gray[900],
      },
      filled: {
        backgroundColor: COLORS.green[400],
        color: COLORS.black,
      },
    },

    size: {
      sm: {
        padding: "12px 18px",
        fontSize: 18,
      },
      md: {
        padding: "20px 36px",
        fontSize: 20,
      },
    },

    rounded: {
      true: {
        borderRadius: "9999px",
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
    rounded: false,
    fullWidth: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
