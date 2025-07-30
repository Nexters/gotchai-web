import { Button, COLOR_VARS, Text, useToast } from "@gotchai/ui";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Layout } from "../../components/Layout/Layout";
import { ResultCard } from "../../components/ResultCard/ResultCard";
import { CardResult } from "../../components/ResultCard/cardConfig";
import { container, downloadSection, buttonContainer } from "./style.css";

const getValidResult = (type: string | null): CardResult | null => {
  const validTypes = Object.values(CardResult).find((result) =>
    result.toLocaleLowerCase().includes(type?.toLocaleLowerCase() ?? "")
  );

  return validTypes ?? CardResult.BRONZE;
};

export const ResultPage = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const result = getValidResult(searchParams.get("type"));

  const handleClickReTry = () => {
    navigate("/");
  };

  const handleClickDownload = () => {
    showToast({
      data: {
        message: "이미지를 저장했어요.",
      },
    });
  };

  return (
    <Layout>
      <div className={container}>
        <ResultCard result={result as CardResult} />
        <div className={downloadSection}>
          <Text color={COLOR_VARS.green[600]} size="lg" weight="medium">
            앱에서도 계속 퀴즈를 풀어볼까요?
          </Text>
          <Button variant="filled">1분만에 다운로드하기</Button>
        </div>
        <div className={buttonContainer}>
          <Button onClick={handleClickReTry}>다시하기</Button>
          <Button onClick={handleClickDownload}>결과 저장하기</Button>
        </div>
      </div>
    </Layout>
  );
};
