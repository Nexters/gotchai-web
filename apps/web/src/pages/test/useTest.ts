import { useReducer, useCallback } from "react";
import { GOLD_SCORE, SILVER_SCORE, QUIZZES } from "./constants";
import { CardResult } from "../../components/ResultCard/cardConfig";

interface TestState {
  currentQuestionIndex: number;
  selectedOptionId: string | null;
  correctAnswers: number;
  isCompleted: boolean;
}

type SelectOptionAction = { type: "SELECT_OPTION"; payload: string };
type SubmitAnswerAction = { type: "SUBMIT_ANSWER" };
type NextQuestionAction = { type: "NEXT_QUESTION" };
type ResetTestAction = { type: "RESET_TEST" };

type TestAction =
  | SelectOptionAction
  | SubmitAnswerAction
  | NextQuestionAction
  | ResetTestAction;

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
            selectedOptionId: action.payload,
          };

        case "SUBMIT_ANSWER": {
          if (!state.selectedOptionId) {
            return state;
          }

          const currentQuestion = QUIZZES[state.currentQuestionIndex];
          const selectedOption = currentQuestion.options.find(
            (option) => option.id === state.selectedOptionId
          );
          const isCorrect = selectedOption?.id === currentQuestion.answer;

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

            if (correctCount >= GOLD_SCORE) {
              result = CardResult.GOLD;
            } else if (correctCount >= SILVER_SCORE) {
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

  const selectedOption = currentQuestion.options.find(
    (option) => option.id === state.selectedOptionId
  );
  const correctOption = currentQuestion.options.find(
    (option) => option.id === currentQuestion.answer
  );
  const isCorrect = selectedOption?.id === currentQuestion.answer;

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
    selectedOption,
    correctOption,
    isCorrect,
    totalQuestions: QUIZZES.length,

    // 액션
    handleOptionSelect,
    handleSubmit,
    handleNextQuestion,
  };
};
