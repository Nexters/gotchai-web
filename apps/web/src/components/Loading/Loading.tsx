import { Text } from "@gotchai/ui";
import {
  loadingContainer,
  loadingPlaceholder,
  textContainer,
  textBackground,
  textOutline,
} from "./style.css";

export const Loading = () => {
  return (
    <div className={loadingContainer}>
      <div className={loadingPlaceholder}></div>
      <div className={textContainer}>
        <Text size="xl" weight="medium" className={textBackground}>
          당신의 Ai력 판단중...
        </Text>
        <Text size="xl" weight="medium" className={textOutline}>
          당신의 Ai력 판단중...
        </Text>
      </div>
    </div>
  );
};
