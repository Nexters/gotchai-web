import { Icon, useToast } from "@gotchai/ui";
import { cloneElement, ReactElement } from "react";

import { useClipboard } from "../hooks/useClipboard";

interface CopyableProps {
	children: ReactElement<{ onClick: () => void }>;
	text: string;
}

export const Copyable = ({ children, text }: CopyableProps) => {
	const { showToast } = useToast();
	const { copy } = useClipboard({
		onSuccess: () => {
			showToast({
				data: {
					icon: <Icon.Check />,
					message: "링크를 복사했어요",
				},
			});
		},
	});

	return cloneElement(children, {
		onClick: () => copy(text),
	});
};
