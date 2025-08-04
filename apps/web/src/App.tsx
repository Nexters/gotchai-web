import { Route, Routes } from "react-router-dom";

import "@gotchai/ui/style.css";

import { IntroPage } from "./pages/intro";
import { TestPage } from "./pages/test";
import { ResultPage } from "./pages/result";

import "./styles";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};
