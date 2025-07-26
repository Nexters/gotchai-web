import React from "react";
import { titleVariant } from "@/styles/typography.css";

interface TitleProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  order,
  color,
  className,
  children,
}) => {
  const SemanticHeadingTag = `h${order}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  return (
    <SemanticHeadingTag
      className={`${titleVariant[order]} ${className || ""}`}
      style={{ color }}
    >
      {children}
    </SemanticHeadingTag>
  );
};
