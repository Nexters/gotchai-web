import { hexToRgba } from "@gotchai/ui";
import { Hex } from "@gotchai/ui";

export const getRadialGradient = (color: Hex, opacity: number): string => `
radial-gradient(
  circle closest-corner at center 110%, 
  ${hexToRgba(color, opacity)} 0%, 
  ${hexToRgba(color, 0)} 100%
)`;

export const getLinearGradient = (
  deg: number,
  color1: Hex,
  color2: Hex
): string => `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 100%)`;
