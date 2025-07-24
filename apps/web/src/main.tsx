import { Counter } from "@gotchai/ui";
import { createRoot } from "react-dom/client";

import "./style.css";

const App = () => (
  <div>
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
