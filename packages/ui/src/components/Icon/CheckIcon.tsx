import type { SVGProps } from "react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="18"
			height="17"
			viewBox="0 0 18 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Check</title>
			<circle cx="9" cy="8.5" r="8.5" fill="#DBFF71" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.4803 6.13454C13.6437 6.28788 13.6437 6.5365 13.4803 6.68985L7.89946 11.9254C7.736 12.0787 7.47099 12.0787 7.30753 11.9254L4.51712 9.3076C4.35367 9.15426 4.35367 8.90564 4.51712 8.75229C4.68058 8.59895 4.9456 8.59895 5.10906 8.75229L7.6035 11.0924L12.8883 6.13454C13.0518 5.9812 13.3168 5.9812 13.4803 6.13454Z"
				fill="#2A3900"
				stroke="#2A3900"
				strokeWidth="0.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
