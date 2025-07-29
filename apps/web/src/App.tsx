import { Route, Routes } from "react-router-dom";

import "@gotchai/ui/style.css";

import "./styles";
import { IntroPage } from "./pages/Intro";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
    </Routes>
  );
};
