import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { COLOR_VARS, media } from "@/styles";

export const button = recipe({
  base: {
    borderRadius: 16,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    border: "none",

    cursor: "pointer",

    textDecoration: "none",
    lineHeight: "150%",
    fontFamily: "Pretendard",
    fontWeight: 500,

    ":active": {
      transform: "translateY(2px)",
    },

    ":disabled": {
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      default: {
        gap: 8,
        padding: "12px 18px",
        borderRadius: 14,
        backgroundColor: COLOR_VARS.transparent,
        color: COLOR_VARS.white,
        fontSize: 18,

        ":hover": {
          backgroundColor: COLOR_VARS.gray[800],
        },

        ":disabled": {
          backgroundColor: COLOR_VARS.transparent,
          color: COLOR_VARS.gray[600],
        },
      },
      filled: {
        padding: "20px 16px",
        backgroundColor: COLOR_VARS.green[400],
        color: COLOR_VARS.black,
        fontSize: 20,
        minWidth: 320,

        ":hover": {
          backgroundColor: COLOR_VARS.green[300],
        },

        ":active": {
          backgroundColor: COLOR_VARS.green[500],
        },

        ":disabled": {
          backgroundColor: COLOR_VARS.gray[500],
          color: COLOR_VARS.gray[700],
        },

        ...media.mobile({
          padding: "16px 20px",
          fontSize: 18,
          fontWeight: 500,
          minWidth: "unset",
          maxWidth: 320,
          width: "100%",
          borderRadius: 16,
        }),
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
    rounded: false,
    fullWidth: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
