import { createRoot } from "react-dom/client";
import { THEME, ToastContainer } from "@gotchai/ui";

import { App } from "./App";

createRoot(document.getElementById("app")!).render(
  <div className={THEME}>
    <App />
    <ToastContainer />
  </div>
);
