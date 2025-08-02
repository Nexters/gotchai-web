import { Chip, COLORS, Text } from "@gotchai/ui";
import {
  quizContainer,
  progressBadge,
  questionContainer,
  questionText,
  optionsContainer,
  optionCard,
  optionBadge,
  quizContent,
  optionText,
} from "./style.css";
import { useQuiz } from "./useQuiz";
import { QuizResultModal } from "../../components/QuizResultModal/QuizResultModal";

export const QuizPage = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionId,
    isModalOpen,
    correctOption,
    isCorrect,
    totalQuestions,
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
    handleModalClose,
  } = useQuiz();

  return (
    <div className={quizContainer}>
      <div className={quizContent}>
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
                onClick={() => {
                  handleOptionSelect(option.id);
                  handleSubmit();
                }}
              >
                <div
                  className={optionBadge({
                    selected:
                      selectedOptionId === null ||
                      selectedOptionId === option.id,
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
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onClickNext={handleNextQuestion}
          icon={
            isCorrect ? (
              <img src="/assets/quiz-correct.png" alt="correct" />
            ) : (
              <img src="/assets/quiz-wrong.png" alt="wrong" />
            )
          }
          title={isCorrect ? "Ai를 찾아냈어요!" : "사람이 작성한 대답이에요"}
          answer={correctOption?.text || ""}
        />
      </div>
    </div>
  );
};
