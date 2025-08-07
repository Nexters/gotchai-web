import { useReducer, useCallback } from "react";
import { SCORES, QUIZZES } from "./constants";
import { CardResult } from "../../components/ResultCard/cardConfig";

interface TestState {
  currentQuestionIndex: number;
  selectedOptionId: string | null;
  correctAnswers: number;
  isCompleted: boolean;
}

type ActionType =
  | "SELECT_OPTION"
  | "SUBMIT_ANSWER"
  | "NEXT_QUESTION"
  | "RESET_TEST";

type TestAction = { type: ActionType; payload?: string };

const initialState: TestState = {
  currentQuestionIndex: 0,
  selectedOptionId: null,
  correctAnswers: 0,
  isCompleted: false,
};

interface UseTestProps {
  onTestEnd?: (result: CardResult) => void;
}

export const useTest = ({ onTestEnd }: UseTestProps = {}) => {
  const testReducer = useCallback(
    (state: TestState, action: TestAction): TestState => {
      switch (action.type) {
        case "SELECT_OPTION":
          // 이미 선택된 경우 무시
          if (state.selectedOptionId) {
            return state;
          }
          return {
            ...state,
            selectedOptionId: action.payload ?? null,
          };

        case "SUBMIT_ANSWER": {
          if (!state.selectedOptionId) {
            return state;
          }

          const isCorrect =
            state.selectedOptionId ===
            QUIZZES[state.currentQuestionIndex].answer;

          return {
            ...state,
            correctAnswers: isCorrect
              ? state.correctAnswers + 1
              : state.correctAnswers,
          };
        }

        case "NEXT_QUESTION": {
          const isLastQuestion =
            state.currentQuestionIndex === QUIZZES.length - 1;

          if (isLastQuestion) {
            // 퀴즈 완료
            const correctCount = state.correctAnswers;
            let result: CardResult;

            if (correctCount >= SCORES.GOLD) {
              result = CardResult.GOLD;
            } else if (correctCount >= SCORES.SILVER) {
              result = CardResult.SILVER;
            } else {
              result = CardResult.BRONZE;
            }

            onTestEnd?.(result);
            return {
              ...state,
              isCompleted: true,
            };
          }

          return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
            selectedOptionId: null,
          };
        }

        case "RESET_TEST":
          return initialState;

        default:
          return state;
      }
    },
    [onTestEnd]
  );

  const [state, dispatch] = useReducer(testReducer, initialState);

  const currentQuestion = QUIZZES[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === QUIZZES.length - 1;

  const correctOption = currentQuestion.options.find(
    (option) => option.id === currentQuestion.answer
  );

  const isCorrect = state.selectedOptionId === currentQuestion.answer;
  const handleOptionSelect = (optionId: string) => {
    dispatch({ type: "SELECT_OPTION", payload: optionId });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_ANSWER" });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  return {
    // 상태
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    selectedOptionId: state.selectedOptionId,
    correctAnswers: state.correctAnswers,
    isCompleted: state.isCompleted,
    isLastQuestion,
    correctOption,
    isCorrect,
    totalQuestionLength: QUIZZES.length,

    // 액션
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
  };
};
