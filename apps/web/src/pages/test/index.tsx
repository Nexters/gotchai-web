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

export const TestPage = () => {
  const navigate = useNavigate();

  const onTestEnd = (result: CardResult) => {
    navigate(`/result?type=${result}`);
  };

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionId,
    correctOption,
    isCorrect,
    totalQuestions,
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
  } = useTest({ onTestEnd });

  const [isQuizResultModalOpen, setIsQuizResultModalOpen] = useState(false);

  const handleOptionClick = (optionId: string) => {
    handleOptionSelect(optionId);
    handleSubmit();

    //0.3초 -> 0.1초로 줄임
    setTimeout(() => {
      setIsQuizResultModalOpen(true);
    }, 100);
  };

  const handleModalClose = () => {
    setIsQuizResultModalOpen(false);
  };

  const handleModalNext = () => {
    handleModalClose();
    handleNextQuestion();
  };

  return (
    <Layout hideLogo>
      <Chip color="green" className={progressBadge}>
        {currentQuestionIndex + 1}/{totalQuestions}
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
        onClickNext={handleModalNext}
        isCorrect={isCorrect}
        title={isCorrect ? "Ai를 찾아냈어요!" : "사람이 작성한 대답이에요"}
        answer={correctOption?.text || ""}
      />
    </Layout>
  );
};
