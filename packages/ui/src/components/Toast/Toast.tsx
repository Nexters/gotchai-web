import { Text } from "@/components/Text";
import {
	ToastOptions,
	ToastContainer as _ToastContainer,
} from "react-toastify";

import { toast, toastContainer } from "./style.css";

interface ToastData {
	message: string;
	icon?: React.ReactNode;
}

export interface ToastProps extends ToastOptions<ToastData> {}

export const Toast = ({ data }: ToastProps) => {
	return (
		<div className={toast}>
			{data?.icon}
			<Text size="lg" weight="semibold">
				{data?.message}
			</Text>
		</div>
	);
};

export const ToastContainer = () => {
	return (
		<_ToastContainer
			position="bottom-center"
			className={toastContainer}
			autoClose={2_000}
			closeButton={false}
			hideProgressBar
			toastStyle={{
				background: "transparent",
				boxShadow: "none",
				padding: 0,
				margin: 0,
				bottom: 80,
			}}
		/>
	);
};
