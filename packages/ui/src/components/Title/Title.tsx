import { HTMLAttributes, PropsWithChildren } from "react";
import { title, TitleVariants } from "./style.css";
import { classNames } from "@/utils";

export type TitleProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> &
    TitleVariants & {
      color?: string;
    }
>;

export const Title: React.FC<TitleProps> = ({
  order,
  color,
  className,
  children,
  ...props
}) => {
  const Tag = `h${order}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag
      className={classNames(title({ order }), className)}
      style={{ color }}
      {...props}
    >
      {children}
    </Tag>
  );
};
