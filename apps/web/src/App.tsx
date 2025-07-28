import "@gotchai/ui/style.css";
import { TypographyExample } from "./typography-example";
import { Button, Chip, Modal } from "@gotchai/ui";
import quizCorrect from "./assets/quiz-correct.png";
import quizWrong from "./assets/quiz-wrong.png";
import "./styles";
import { useState } from "react";
import { DefaultModal } from "./components/DefaultModal/DefaultModal";

export const App = () => {
  const [isModalOpenCorrect, setIsModalOpenCorrect] = useState(false);
  const [isModalOpenWrong, setIsModalOpenWrong] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpenCorrect(true);
  };

  const handleOpenModalWrong = () => {
    setIsModalOpenWrong(true);
  };

  const handleCloseModal = () => {
    setIsModalOpenCorrect(false);
    setIsModalOpenWrong(false);
  };

  const handleClickNext = () => {
    setIsModalOpenCorrect(false);
    setIsModalOpenWrong(false);
  };

  return (
    <div>
      <TypographyExample />
      <Chip color="blue">1/7</Chip>
      <Button onClick={handleOpenModal}>정답 버튼</Button>
      <Button onClick={handleOpenModalWrong}>오답 버튼</Button>
      <Modal isOpen={isModalOpenCorrect} onClose={handleCloseModal}>
        <DefaultModal
          isOpen={isModalOpenCorrect}
          title="정답공개"
          answer="어떤 빵을 사셨나요? 다음엔 제가 추천드릴수도 있어요"
          icon={<img src={quizCorrect} alt="check" />}
          onClickNext={handleClickNext}
        />
      </Modal>
      <Modal isOpen={isModalOpenWrong} onClose={handleCloseModal}>
        <DefaultModal
          isOpen={isModalOpenWrong}
          title="오답"
          answer="음~ 반짝이랑 리본 살짝 감으면 확 살아날 것 같은데?"
          icon={<img src={quizWrong} alt="check" />}
          onClickNext={handleClickNext}
        />
      </Modal>
    </div>
  );
};
