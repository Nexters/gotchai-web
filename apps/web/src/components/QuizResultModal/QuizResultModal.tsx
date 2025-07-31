import { HTMLAttributes } from "react";
import {
  modalContent,
  answerContainer,
  iconContainer,
  titleContainer,
  divider,
  nextButton,
} from "./style.css";
import { COLORS, Modal } from "@gotchai/ui";
import { Button, Text, Title } from "@gotchai/ui";

export type QuizResultModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  icon: React.ReactNode;
  title: string;
  onClose: () => void;
  onClickNext: () => void;
  answer: string;
};

export const QuizResultModal = ({
  isOpen,
  icon,
  title,
  answer,
  onClose,
  onClickNext,
}: QuizResultModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={modalContent}>
        <div className={iconContainer}>{icon}</div>
        <div className={titleContainer}>
          <Title order={5} color={COLORS.gray[50]}>
            {title}
          </Title>
        </div>
        <div className={answerContainer}>
          <Text size="lg" color={COLORS.gray[200]} weight="medium">
            정답 공개
          </Text>
          <div className={divider} />
          <Text size="xl" color={COLORS.white} weight="medium">
            {answer}
          </Text>
        </div>

        <Button variant="filled" onClick={onClickNext} className={nextButton}>
          다음
        </Button>
      </div>
    </Modal>
  );
};
