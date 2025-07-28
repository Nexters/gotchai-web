import { Button } from "@gotchai/ui";

interface QuizSubmitButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const QuizSubmitButton = ({
  disabled,
  onClick,
}: QuizSubmitButtonProps) => {
  return (
    <Button variant="filled" disabled={disabled} onClick={onClick}>
      나는 얼마나 AI를 잘 찾을까?
    </Button>
  );
};
