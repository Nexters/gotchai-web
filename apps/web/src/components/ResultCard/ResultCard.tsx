import { Text, Title } from "@gotchai/ui";
import {
  cardContainer,
  cardContent,
  cardImage,
  cardText,
  cardLinearBackground,
  cardRadialGradient,
} from "./style.css";
import { CardResult, getCardConfig } from "./cardConfig";
import { getCardImage } from "./cardImages";

interface CardProps {
  result: CardResult;
}

export const ResultCard = ({ result }: CardProps) => {
  const config = getCardConfig(result);
  const imageSrc = getCardImage(result);

  return (
    <div className={cardContainer}>
      <div className={cardLinearBackground} />
      <div className={cardRadialGradient({ result })} />
      <div className={cardContent}>
        <img src={imageSrc} className={cardImage} alt="card" />
        <Text size="xl" weight="medium" color={config.textColor}>
          {config.startTitle}
        </Text>
        <Title order={3} color={config.titleColor}>
          {config.title}
        </Title>
        <Text size="lg" weight="medium" className={cardText}>
          {config.text}
        </Text>
      </div>
    </div>
  );
};
