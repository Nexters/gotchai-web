import { HTMLAttributes } from "react";
import {
  modalContent,
  answerContainer,
  iconContainer,
  divider,
} from "./style.css";
import { COLORS } from "@gotchai/ui";
import { Button, Text, Title } from "@gotchai/ui";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  icon: React.ReactNode;
  title: string;
  onClickNext: () => void;
  answer: string;
};

export const DefaultModal = ({
  isOpen,
  icon,
  title,
  answer,
  onClickNext,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
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
      <Button
        variant="filled"
        onClick={onClickNext}
        style={{ width: "90%", marginTop: "20px" }}
      >
        <Text size="lg" weight="semibold" color={COLORS.black}>
          다음
        </Text>
      </Button>
    </div>
  );
};
