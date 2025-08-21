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
import { QUIZZES } from "../../pages/test/constants";

interface CardProps {
  result: CardResult;
  correctCount: number;
}

export const ResultCard = forwardRef<HTMLDivElement, CardProps>(
  ({ result, correctCount }, ref) => {
    // 동적 이미지 소스 설정
    const imageSrc = `/assets/${result}.png`;
    // 동적 subTitle 생성
    const dynamicSubTitle =
      `${QUIZZES.length}개중 ${correctCount}개를 맞춘 당신은` ||
      CARD_CONTENTS[result].subTitle;

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
                {dynamicSubTitle}
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
