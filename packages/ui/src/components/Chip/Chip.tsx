import { Text } from "@/components";
import { classNames } from "@/utils";
import { HTMLAttributes, PropsWithChildren } from "react";
import { COLORS } from "@/styles";

import { chip } from "./style.css";

export type ChipProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    color?: keyof typeof COLORS;
  }
>;

export const Chip = ({ children, className, color, ...props }: ChipProps) => {
  return (
    <div className={classNames(chip({ color }), className)} {...props}>
      {typeof children === "string" ? (
        <Text size="sm" weight="semibold" color="inherit">
          {children}
        </Text>
      ) : (
        children
      )}
    </div>
  );
};
