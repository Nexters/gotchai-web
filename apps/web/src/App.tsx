import { Route, Routes } from "react-router-dom";

import "@gotchai/ui/style.css";

import "./styles";
import { IntroPage } from "./pages/Intro";
import { ComponentsPage } from "./pages/Components";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/components" element={<ComponentsPage />} />
    </Routes>
  );
};
