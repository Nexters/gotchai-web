import { HTMLAttributes } from "react";
import {
  modalContent,
  answerContainer,
  iconContainer,
  divider,
  buttonContainer,
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
        <Title order={5} color={COLORS.gray[50]} style={{ marginTop: "36px" }}>
          {title}
        </Title>
        <div className={answerContainer}>
          <Text size="lg" color={COLORS.gray[200]} weight="medium">
            정답 공개
          </Text>
          <div className={divider} />
          <Text size="xl" color={COLORS.white} weight="medium">
            {answer}
          </Text>
        </div>
        <div className={buttonContainer}>
          <Button
            variant="filled"
            onClick={onClickNext}
            style={{
              marginTop: "20px",
            }}
          >
            다음
          </Button>
        </div>
      </div>
    </Modal>
  );
};
