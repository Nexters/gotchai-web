import { Button, COLOR_VARS, Icon, Text, useToast } from "@gotchai/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";

import { Layout } from "../../components/Layout/Layout";
import { ResultCard } from "../../components/ResultCard/ResultCard";
import {
  CardResult,
  RESULT_CARD_BACKGROUND_COLORS,
  RESULT_CARD_IMAGE_SIZE,
} from "../../components/ResultCard/cardConfig";
import { container, downloadSection, buttonContainer } from "./style.css";
import { URLS } from "../../constants/urls";

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
  const resultCardRef = useRef<HTMLDivElement>(null);

  const result = getValidResult(searchParams.get("type"));

  const handleClickReTry = () => {
    navigate(URLS.MAIN);
  };

  const handleClickImageDownload = async (result: CardResult) => {
    if (!resultCardRef.current) return;

    try {
      const canvas = await html2canvas(resultCardRef.current, {
        scale: 2, // 고해상도
        useCORS: true, // 외부 이미지 허용
        allowTaint: true, // 외부 리소스 허용
        backgroundColor: null, // 배경 투명
        logging: false, // 로그 비활성화

        scrollX: 0,
        scrollY: 0,
      });

      // 새로운 캔버스 생성 (434x722 크기)
      const finalCanvas = document.createElement("canvas");
      const finalCtx = finalCanvas.getContext("2d");

      // 최종 캔버스 크기 설정 (카드와 동일한 크기)
      finalCanvas.width = RESULT_CARD_IMAGE_SIZE.width * 2;
      finalCanvas.height = RESULT_CARD_IMAGE_SIZE.height * 2;

      if (finalCtx) {
        // 상→하 LinearGradient 배경 그리기
        const gradient = finalCtx.createLinearGradient(
          0,
          0,
          0,
          RESULT_CARD_IMAGE_SIZE.height * 2
        );
        gradient.addColorStop(0, RESULT_CARD_BACKGROUND_COLORS[result].top);
        gradient.addColorStop(0.1, RESULT_CARD_BACKGROUND_COLORS[result].top2);
        gradient.addColorStop(0.16, RESULT_CARD_BACKGROUND_COLORS[result].top3);
        gradient.addColorStop(0.33, RESULT_CARD_BACKGROUND_COLORS[result].top4);
        gradient.addColorStop(0.62, RESULT_CARD_BACKGROUND_COLORS[result].top5);

        finalCtx.fillStyle = gradient;
        finalCtx.fillRect(
          0,
          0,
          RESULT_CARD_IMAGE_SIZE.width * 2,
          RESULT_CARD_IMAGE_SIZE.height * 2
        );

        // ResultCard를 (0,0) 위치에 그리기 (크기가 동일하므로)
        finalCtx.drawImage(canvas, 112, 290);
      }

      // 최종 캔버스를 blob으로 변환하여 클립보드에 저장
      finalCanvas.toBlob(async (blob) => {
        if (!blob) {
          showToast({
            data: {
              message: "이미지 변환에 실패했어요.",
            },
          });
          return;
        }

        try {
          // 클립보드에 이미지 저장 (배경 + 카드가 합쳐진 이미지)
          const clipboardItem = new ClipboardItem({
            "image/png": blob,
          });
          await navigator.clipboard.write([clipboardItem]);

          showToast({
            data: {
              icon: <Icon.Check />,
              message: "이미지를 저장했어요.",
            },
          });
        } catch (error) {
          console.error("클립보드 저장 실패:", error);
          showToast({
            data: {
              message: "클립보드 저장에 실패했어요.",
            },
          });
        }
      }, "image/png");
    } catch (error) {
      console.error("이미지 변환 실패:", error);
    }
  };

  return (
    <Layout>
      <div className={container}>
        <ResultCard result={result as CardResult} ref={resultCardRef} />

        <div className={downloadSection}>
          <Text color={COLOR_VARS.green[600]} size="lg" weight="medium">
            앱에서도 계속 퀴즈를 풀어볼까요?
          </Text>
          <Button variant="filled" disabled>
            1분만에 다운로드하기
          </Button>
        </div>
        <div className={buttonContainer}>
          <Button onClick={handleClickReTry} leftItem={<Icon.Reset />}>
            다시하기
          </Button>
          <Button
            onClick={() => handleClickImageDownload(result as CardResult)}
            leftItem={<Icon.Save />}
          >
            결과 저장하기
          </Button>
        </div>
      </div>
    </Layout>
  );
};
