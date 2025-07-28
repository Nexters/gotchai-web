import { Button } from "@gotchai/ui";

interface ShareButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const ShareButton = ({ disabled, onClick }: ShareButtonProps) => {
  return (
    <Button variant="default" disabled={disabled} onClick={onClick}>
      테스트 공유하기
    </Button>
  );
};
