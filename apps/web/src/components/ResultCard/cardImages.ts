import { CardResult } from "./cardConfig";

export const CARD_IMAGES: Record<CardResult, string> = {
  gold: "/assets/gold.png",
  silver: "/assets/silver.png",
  bronze: "/assets/bronze.png",
};

export const getCardImage = (result: CardResult): string => {
  return CARD_IMAGES[result];
};
