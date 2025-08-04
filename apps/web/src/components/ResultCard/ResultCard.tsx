import { Text, Title } from "@gotchai/ui";

import {
  cardContainer,
  cardContent,
  cardImage,
  cardLinearBackground,
  cardLogo,
  cardRadialGradient,
  cardText
} from "./style.css";
import { CardResult, CARD_CONTENTS } from "./cardConfig";
import { CONTENT_COLORS } from "./cardConfig";
import Logo from "../Logo";

interface CardProps {
  result: CardResult;
}

export const ResultCard = ({ result }: CardProps) => {
  const imageSrc = `/assets/${result}.png`;

  return (
    <div className={cardContainer}>
      <div className={cardLinearBackground} />
      <div className={cardRadialGradient({ result })} />
      <div className={cardContent}>
        <img src={imageSrc} className={cardImage} alt="card" />
        <Text size="xl" weight="medium" color={CONTENT_COLORS[result].subTitle}>
          {CARD_CONTENTS[result].subTitle}
        </Text>
        
        <Title order={3} color={CONTENT_COLORS[result].title}>
          {CARD_CONTENTS[result].title}
        </Title>
        <Text size="lg" weight="medium" className={cardText}>
          {CARD_CONTENTS[result].description}
        </Text>
        <Logo fill={CONTENT_COLORS[result].title} className={cardLogo} />
      </div>
    </div>
  );
};
