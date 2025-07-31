import { useReducer } from "react";
import { QUIZ_QUESTIONS } from "./constants";

interface QuizState {
  currentQuestionIndex: number;
  selectedOptionId: string | null;
  isModalOpen: boolean;
  correctAnswers: number;
}

type QuizAction =
  | { type: "SELECT_OPTION"; payload: string }
  | { type: "SUBMIT_ANSWER" }
  | { type: "SHOW_MODAL" }
  | { type: "NEXT_QUESTION" }
  | { type: "CLOSE_MODAL" }
  | { type: "RESET_QUIZ" };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedOptionId: null,
  isModalOpen: false,
  correctAnswers: 0,
};

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "SELECT_OPTION":
      if (state.selectedOptionId) return state; // 이미 선택된 경우 무시
      return {
        ...state,
        selectedOptionId: action.payload,
      };

    case "SUBMIT_ANSWER": {
      if (!state.selectedOptionId) return state;

      const currentQuestion = QUIZ_QUESTIONS[state.currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(
        (option) => option.id === state.selectedOptionId
      );
      const isCorrect = selectedOption?.isCorrect || false;

      return {
        ...state,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
      };
    }

    case "SHOW_MODAL": {
      return {
        ...state,
        isModalOpen: true,
      };
    }

    case "NEXT_QUESTION": {
      const isLastQuestion =
        state.currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

      if (isLastQuestion) {
        // 퀴즈 완료 - 결과 페이지로 이동
        const correctCount = state.correctAnswers;
        let result;

        if (correctCount >= 6) {
          result = "gold";
        } else if (correctCount >= 3) {
          result = "silver";
        } else {
          result = "bronze";
        }

        // 결과 페이지로 이동 (나중에 라우터로 변경)
        window.location.href = `/result?type=${result}`;
        return state;
      }

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOptionId: null,
        isModalOpen: false,
      };
    }

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    case "RESET_QUIZ":
      return initialState;

    default:
      return state;
  }
};

export const useQuiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const currentQuestion = QUIZ_QUESTIONS[state.currentQuestionIndex];
  const isLastQuestion =
    state.currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const selectedOption = currentQuestion.options.find(
    (option) => option.id === state.selectedOptionId
  );
  const correctOption = currentQuestion.options.find(
    (option) => option.isCorrect
  );
  const isCorrect = selectedOption?.isCorrect || false;

  const handleOptionSelect = (optionId: string) => {
    dispatch({ type: "SELECT_OPTION", payload: optionId });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_ANSWER" });

    // 0.3초 후 모달 표시
    setTimeout(() => {
      dispatch({ type: "SHOW_MODAL" });
    }, 500);
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleModalClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    // 상태
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    selectedOptionId: state.selectedOptionId,
    isModalOpen: state.isModalOpen,
    correctAnswers: state.correctAnswers,
    isLastQuestion,
    selectedOption,
    correctOption,
    isCorrect,
    totalQuestions: QUIZ_QUESTIONS.length,

    // 액션
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
    handleModalClose,
  };
};
