import { Button, COLOR_VARS, Icon, Text, useToast } from "@gotchai/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";

import { Layout } from "../../components/Layout/Layout";
import { ResultCard } from "../../components/ResultCard/ResultCard";
import { CardResult } from "../../components/ResultCard/cardConfig";
import { container, downloadSection, buttonContainer } from "./style.css";
import { URLS } from "../../constants/urls";

const getValidResult = (type: string | null): CardResult | null => {
	const validTypes = Object.values(CardResult).find((result) =>
		result.toLocaleLowerCase().includes(type?.toLocaleLowerCase() ?? ""),
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

	const handleClickDownload = async () => {
		if (!resultCardRef.current) return;

		try {
			const canvas = await html2canvas(resultCardRef.current, {
				scale: 2, // 고해상도
				useCORS: true, // 외부 이미지 허용
				allowTaint: true, // 외부 리소스 허용
				backgroundColor: null, // 배경 투명
				logging: false, // 로그 비활성화
			});

			canvas.toBlob(async (blob) => {
				if (!blob) {
					showToast({
						data: {
							message: "이미지 변환에 실패했어요.",
						},
					});
					return;
				}

				try {
					// 클립보드에 이미지 저장
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
				}
			}, "image/png");
		} catch (error) {
			console.error("이미지 변환 실패:", error);
		}
	};

	return (
		<Layout>
			<div className={container}>
				<div ref={resultCardRef}>
					<ResultCard result={result as CardResult} />
				</div>
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
					<Button onClick={handleClickDownload} leftItem={<Icon.Save />}>
						결과 저장하기
					</Button>
				</div>
			</div>
		</Layout>
	);
};
