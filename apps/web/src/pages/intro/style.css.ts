import { COLOR_VARS, media } from "@gotchai/ui";
import { style } from "@vanilla-extract/css";

export const introContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
  width: "100%",
});

export const introTitle = style({
  ...media.mobile({
    fontSize: 24,
  }),
});

export const introImage = style({
  width: 300,
  height: 240,

  ...media.mobile({
    maxWidth: 300,
    height: 'auto',
    width: "100%",
  }),
});

export const introMessage = style({
  textAlign: "center",

  ...media.mobile({
    fontSize: 15,
  }),
});

export const introFooter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  width: "100%",
});

export const introParticipant = style({
  opacity: 0.5,
  color: COLOR_VARS.green[400],
  fontSize: 15,

  ...media.mobile({
    fontSize: 14,
  }),
});
