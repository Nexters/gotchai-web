import { Text, Title } from "@gotchai/ui";

import {
  cardContainer,
  cardContent,
  cardImage,
  cardContentContainer,
  cardLinearBackground,
  cardLogoContainer,
  cardRadialGradient,
  cardText,
  cardTextContent,
} from "./style.css";
import { CardResult, CARD_CONTENTS } from "./cardConfig";
import { CONTENT_COLORS } from "./cardConfig";
import Logo from "../Logo";
import { forwardRef } from "react";

interface CardProps {
  result: CardResult;
}

export const ResultCard = forwardRef<HTMLDivElement, CardProps>(
  ({ result }, ref) => {
    const imageSrc = `/assets/${result}.png`;

    return (
      <div className={cardContainer} ref={ref}>
        <div className={cardLinearBackground} />
        <div className={cardRadialGradient({ result })} />
        <div className={cardContent}>
          <div className={cardContentContainer}>
            <img src={imageSrc} className={cardImage} alt="card" />
            <div className={cardTextContent}>
              <Text
                size="xl"
                weight="medium"
                color={CONTENT_COLORS[result].subTitle}
              >
                {CARD_CONTENTS[result].subTitle}
              </Text>
              <Title order={3} color={CONTENT_COLORS[result].title}>
                {CARD_CONTENTS[result].title}
              </Title>
              <Text size="lg" weight="medium" className={cardText}>
                {CARD_CONTENTS[result].description}
              </Text>
            </div>
          </div>
          <div className={cardLogoContainer}>
            <Logo
              width={56}
              height={12}
              fill={CONTENT_COLORS[result].subTitle}
            />
          </div>
        </div>
      </div>
    );
  }
);
