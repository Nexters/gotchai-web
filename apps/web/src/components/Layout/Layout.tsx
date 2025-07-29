import { ReactNode } from "react";

import { Logo } from "./Logo";
import { container, layout, wrapper } from "./style.css";

interface LayoutProps {
  children: ReactNode;
  hideLogo?: boolean;
  footer?: ReactNode;
}

export const Layout = ({ children, hideLogo, footer }: LayoutProps) => {
  return (
    <div className={layout}>
      {!hideLogo && (
        <header>
          <Logo />
        </header>
      )}
      <main className={wrapper}>
        <div className={container}>{children}</div>
      </main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
