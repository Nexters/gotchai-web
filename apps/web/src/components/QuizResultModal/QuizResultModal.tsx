import { HTMLAttributes } from "react";
import {
  modalContent,
  answerContainer,
  iconContainer,
  titleContainer,
  divider,
  nextButton,
  answerText,
} from "./style.css";
import { COLORS, Modal } from "@gotchai/ui";
import { Button, Text, Title } from "@gotchai/ui";

export type QuizResultModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  isCorrect: boolean;
  onClose: () => void;
  answer: string;
};

export const QuizResultModal = ({
  isOpen,
  isCorrect,
  answer,
  onClose,
}: QuizResultModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={modalContent}>
        <div className={iconContainer}>
          {isCorrect ? (
            <img src="/assets/quiz-correct.png" alt="correct" />
          ) : (
            <img src="/assets/quiz-wrong.png" alt="wrong" />
          )}
        </div>
        <div className={titleContainer}>
          <Title order={5} color={COLORS.gray[50]}>
            {isCorrect ? "Ai를 찾아냈어요!" : "사람이 작성한 대답이에요"}
          </Title>
        </div>
        <div className={answerContainer}>
          <Text size="lg" color={COLORS.gray[200]} weight="medium">
            정답 공개
          </Text>
          <div className={divider} />
          <Text
            size="xl"
            color={COLORS.white}
            weight="medium"
            className={answerText}
          >
            {answer}
          </Text>
        </div>

        <Button variant="filled" onClick={onClose} className={nextButton}>
          다음
        </Button>
      </div>
    </Modal>
  );
};
