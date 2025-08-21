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
    title: "Ai 킬러",
    description: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
  [CardResult.SILVER]: {
    subTitle: "충분히 잘하는",
    title: "Ai 베테랑",
    description: "웬만한 Ai는 속이려다\n뼈도 못 추릴 것 같아요",
  },
  [CardResult.BRONZE]: {
    subTitle: "노력이 필요한 당신은",
    title: "Ai 꿈나무",
    description: "이제 막 Ai에 눈을 떴군요!\n가능성이 무궁무진해요",
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

export const RESULT_CARD_BACKGROUND_COLORS: Record<
  CardResult,
  { top: Hex; top2: Hex; top3: Hex; top4: Hex; top5: Hex }
> = {
  [CardResult.GOLD]: {
    top: "#615920",
    top2: "#433F21",
    top3: "#373521",
    top4: "#2B2A22",
    top5: "#1D1E22",
  },
  [CardResult.SILVER]: {
    top: "#37424E",
    top2: "#2F3741",
    top3: "#2B313A",
    top4: "#25282F",
    top5: "#1D1E22",
  },
  [CardResult.BRONZE]: {
    top: "#664F32",
    top2: "#4F402D",
    top3: "#3F352A",
    top4: "#272524",
    top5: "#1D1E22",
  },
};

export const RESULT_CARD_IMAGE_SIZE = {
  width: 434,
  height: 722,
};
