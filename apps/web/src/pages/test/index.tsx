import { Chip, COLORS, Text } from "@gotchai/ui";
import {
  progressBadge,
  questionContainer,
  questionText,
  optionsContainer,
  optionCard,
  optionBadge,
  optionText,
} from "./style.css";
import { useState } from "react";
import { useTest } from "./useTest";
import { QuizResultModal } from "../../components/QuizResultModal/QuizResultModal";
import { useNavigate } from "react-router-dom";
import { CardResult } from "../../components/ResultCard/cardConfig";
import { Layout } from "../../components/Layout/Layout";
import { Loading } from "../../components/Loading/Loading";
import { URLS } from "../../constants/urls";

export const TestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onTestEnd = (result: CardResult) => {
    setIsLoading(true);

    setTimeout(() => {
      navigate(URLS.RESULT(result));
    }, 4_000);
  };

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionId,
    totalQuestionLength,
    isCorrect,
    correctOption,
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
  } = useTest({ onTestEnd });

  const [isQuizResultModalOpen, setIsQuizResultModalOpen] = useState(false);

  const handleOptionClick = (optionId: string) => {
    handleOptionSelect(optionId);
    handleSubmit();

    setIsQuizResultModalOpen(true);
  };

  const handleModalClose = () => {
    setIsQuizResultModalOpen(false);
    handleNextQuestion();
  };

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout hideLogo>
      <Chip color="green" className={progressBadge}>
        {currentQuestionIndex + 1}/{totalQuestionLength}
      </Chip>
      <div className={questionContainer}>
        <div className={questionText}>
          <Text size="xl" weight="medium" color={COLORS.white}>
            {currentQuestion.question}
          </Text>
          <Text size="xl" weight="bold" color={COLORS.white}>
            Ai가 한 말은 무엇일까요?
          </Text>
        </div>

        <div className={optionsContainer}>
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className={optionCard({
                selected: selectedOptionId === option.id,
                disabled: selectedOptionId !== null,
              })}
              onClick={() => handleOptionClick(option.id)}
            >
              <div
                className={optionBadge({
                  selected:
                    selectedOptionId === null || selectedOptionId === option.id,
                })}
              >
                <Text size="lg" weight="semibold" color={COLORS.black}>
                  {option.id}
                </Text>
              </div>
              <Text
                size="lg"
                weight="medium"
                color={
                  selectedOptionId === option.id ? "inherit" : COLORS.white
                }
                className={optionText}
              >
                {option.text}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <QuizResultModal
        isOpen={isQuizResultModalOpen}
        onClose={handleModalClose}
        isCorrect={isCorrect}
        answer={correctOption?.text || ""}
      />
    </Layout>
  );
};
