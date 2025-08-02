import { Button, Text, Title } from "@gotchai/ui";
import { useNavigate } from "react-router-dom";

import { Copyable } from "../../components/Copyable";
import { Layout } from "../../components/Layout/Layout";
import {
  introContainer,
  introFooter,
  introImage,
  introMessage,
  introParticipant,
  introTitle,
} from "./style.css";

export const IntroPage = () => {
  return (
    <Layout footer={<IntroFooter />}>
      <IntroContent />
    </Layout>
  );
};

const IntroContent = () => {
  const navigate = useNavigate();

  return (
    <div className={introContainer}>
      <Title order={1} className={introTitle}>
        숨은 AI 찾기
      </Title>
      <img src="/assets/gotchai-intro.png" alt="intro" className={introImage} />
      <div>
        <Text size="lg" weight="medium" className={introMessage}>
          AI와 사람의 경계가 희미해진 시대에서 안녕하신가요?
        </Text>
        <Text size="lg" weight="medium" className={introMessage}>
          아무리 사람처럼 말한다고 해도
          <br />
          AI가 사람보다 마음을 더 잘 전달할 수는 없겠죠.
        </Text>
        <Text
          size="lg"
          weight="medium"
          style={{ marginTop: 8 }}
          className={introMessage}
        >
          그럼, 사람 사이에 숨은 AI를 찾으러 가 볼까요?
        </Text>
      </div>
      <div className={introFooter}>
        <Text className={introParticipant}>참여자 수 | 435명</Text>
        <Button variant="filled" onClick={() => navigate("/quiz")}>
          나는 얼마나 AI를 잘 찾을까?
        </Button>
      </div>
    </div>
  );
};

const IntroFooter = () => {
  return (
    <Copyable text={window.location.href}>
      <Button variant="default">테스트 공유하기</Button>
    </Copyable>
  );
};
