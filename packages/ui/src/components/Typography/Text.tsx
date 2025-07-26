import {
  fontSize,
  fontWeight,
  Size,
  Weight,
} from "@/styles/typography.css";

interface TextProps {
  size: Size;
  weight?: Weight;
  lineHeight?: string;
  fontFamily?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size,
  weight = "medium",
  lineHeight = "150%",
  color = "black",
  className,
  children,
}) => {
  return (
    <p
      className={className || ""}
      style={{
        fontSize: fontSize[size],
        fontWeight: fontWeight[weight],
        lineHeight: lineHeight,
        color,
      }}
    >
      {children}
    </p>
  );
};
