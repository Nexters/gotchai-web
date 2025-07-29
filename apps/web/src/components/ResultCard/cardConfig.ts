export type CardResult = "gold" | "silver" | "bronze";

export interface CardConfig {
  color: string;
  startTitle: string;
  titleColor: string;
  textColor: string;
  title: string;
  text: string;
}

export const CARD_CONFIGS: Record<CardResult, CardConfig> = {
  gold: {
    color: "#BDAB47",
    startTitle: "모두 다맞춘",
    titleColor: "#FFEC87",
    textColor: "#BDAB47",
    title: "기계 사냥꾼",
    text: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
  silver: {
    color: "#6D8DC4",
    startTitle:"충분히 잘하는",
    titleColor: "#BED6FF",
    textColor: "#6D8DC4",
    title: "기계 사냥꾼",
    text: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
  bronze: {
    color: "#B9804B",
    startTitle:"노력이 필요한 당신은",
    titleColor: "#FFC289",
    textColor: "#B9804B",
    title: "기계 사냥꾼",
    text: "AI가 지배하는 세상에서도\n생존력 만렙일 것 같아요",
  },
};

export const getCardConfig = (result: CardResult): CardConfig => {
  return CARD_CONFIGS[result];
};
