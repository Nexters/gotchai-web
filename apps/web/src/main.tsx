import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { THEME, ToastContainer } from "@gotchai/ui";

import { App } from "./App";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <div className={THEME}>
      <App />
      <ToastContainer />
    </div>
  </BrowserRouter>
);
