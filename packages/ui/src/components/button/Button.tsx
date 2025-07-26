import { HTMLAttributes, PropsWithChildren } from "react";

import { button, ButtonVariants } from "./style.css";
import { classNames } from "@/utils";

export type ButtonProps = PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> & ButtonVariants
>;

export const Button = ({
  children,
  variant,
  size,
  rounded,
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        button({ variant, size, rounded, fullWidth }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
