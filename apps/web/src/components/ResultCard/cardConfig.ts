import { Hex } from "@gotchai/ui";

export enum CardResult {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
}

export interface CardContent {
  subTitle: string;
  title: string;
  description: string;
}

export const BACKGROUND_GRADIENTS: Record<string, Hex> = {
  LEFT_TOP: "#DEDFD0",
  RIGHT_BOTTOM: "#9EA481",
};

export const CARD_CONTENTS: Record<CardResult, CardContent> = {
  [CardResult.GOLD]: {
    subTitle: "모두 다맞춘",
    title: "기계 사냥꾼",
    description: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
  [CardResult.SILVER]: {
    subTitle: "충분히 잘하는",
    title: "기계 사냥꾼",
    description: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
  [CardResult.BRONZE]: {
    subTitle: "노력이 필요한 당신은",
    title: "기계 사냥꾼",
    description: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
};

export const CONTENT_COLORS: Record<CardResult, { subTitle: Hex; title: Hex }> =
  {
    [CardResult.GOLD]: {
      subTitle: "#BDAB47",
      title: "#FFEC87",
    },
    [CardResult.SILVER]: {
      subTitle: "#6D8DC4",
      title: "#BED6FF",
    },
    [CardResult.BRONZE]: {
      subTitle: "#B9804B",
      title: "#FFC289",
    },
  };
