import { Text } from "@gotchai/ui";
import Lottie from "lottie-react";

import {
	loadingContainer,
	textContainer,
	textBackground,
	textOutline,
} from "./style.css";
import lottie from "./lottie.json";

export const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottie,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={loadingContainer}>
			<Lottie {...defaultOptions} />
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
