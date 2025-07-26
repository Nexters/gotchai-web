import { HTMLAttributes, PropsWithChildren } from "react";
import { text, TextVariants } from "./style.css";
import { classNames } from "@/utils";

export type TextProps = PropsWithChildren<
  HTMLAttributes<HTMLParagraphElement> &
    TextVariants & {
      color?: string;
    }
>;

export const Text: React.FC<TextProps> = ({
  size,
  weight,
  lineHeight,
  fontFamily,
  color,
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={classNames(
        text({ size, weight, lineHeight, fontFamily }),
        className
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </p>
  );
};
