import { Route, Routes } from "react-router-dom";

import "@gotchai/ui/style.css";

import { IntroPage } from "./pages/intro";
import { QuizPage } from "./pages/quiz";
import { ResultPage } from "./pages/result";

import "./styles";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};
