import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { classNames } from "@/utils";
import { Text } from "@/components";

import { button, ButtonVariants } from "./style.css";

export type ButtonProps = PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> &
    ButtonVariants & {
      disabled?: boolean;
      leftItem?: ReactNode;
      rightItem?: ReactNode;
    }
>;

export const Button = ({
  children,
  variant,
  rounded,
  fullWidth,
  className,
  disabled,
  leftItem,
  rightItem,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classNames(button({ variant, rounded, fullWidth }), className)}
      {...props}
    >
      {leftItem}
      <Text weight="semibold" style={{ fontSize: "inherit", color: "inherit" }}>
        {children}
      </Text>
      {rightItem}
    </button>
  );
};
