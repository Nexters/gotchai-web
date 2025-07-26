import { createRoot } from "react-dom/client";
import { theme } from "@gotchai/ui";

import { App } from "./App";

createRoot(document.getElementById("app")!).render(
  <div className={theme}>
    <App />
  </div>
);
