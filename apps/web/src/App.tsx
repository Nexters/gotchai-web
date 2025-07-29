import "@gotchai/ui/style.css";
import { TypographyExample } from "./typography-example";
import { Button, Chip } from "@gotchai/ui";
import quizCorrect from "./assets/quiz-correct.png";
import quizWrong from "./assets/quiz-wrong.png";
import "./styles";
import { useState } from "react";
import { QuizResultModal } from "./components/QuizResultModal/QuizResultModal";

export const App = () => {
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsCorrectModalOpen(true);
  };

  const handleOpenModalWrong = () => {
    setIsWrongModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCorrectModalOpen(false);
    setIsWrongModalOpen(false);
  };

  const handleClickNext = () => {
    setIsCorrectModalOpen(false);
    setIsWrongModalOpen(false);
  };

  return (
    <div>
      <TypographyExample />
      <Chip color="blue">1/7</Chip>
      <Button onClick={handleOpenModal}>정답 버튼</Button>
      <Button onClick={handleOpenModalWrong}>오답 버튼</Button>
      <QuizResultModal
        isOpen={isCorrectModalOpen}
        title="정답공개"
        answer="어떤 빵을 사셨나요? 다음엔 제가 추천드릴수도 있어요"
        icon={<img src={quizCorrect} alt="check" />}
        onClickNext={handleClickNext}
        onClose={handleCloseModal}
      />
      <QuizResultModal
        isOpen={isWrongModalOpen}
        title="오답"
        answer="음~ 반짝이랑 리본 살짝 감으면 확 살아날 것 같은데?"
        icon={<img src={quizWrong} alt="check" />}
        onClickNext={handleClickNext}
        onClose={handleCloseModal}
      />
    </div>
  );
};
