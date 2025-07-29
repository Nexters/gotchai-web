import { Link } from "react-router-dom";

import { logo } from "./style.css";

export const Logo = () => {
  return (
    <Link to="/">
      <img src="/assets/logo.png" alt="logo" className={logo} />
    </Link>
  );
};
