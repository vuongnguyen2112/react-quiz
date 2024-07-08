import { createContext, useReducer } from "react";
import { decodeReponseQuestions, shuffleAnswers } from "../helpers";

export const QuizContext = createContext();

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  answers: [],
  currentAnswer: "",
  correctAnswersCount: 0,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_ACTION":
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    case "RESTART":
      return initialState;
    case "SELECT_ANSWER":
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    case "FETCH_QUESTIONS":
      const decodeQuestions = decodeReponseQuestions(action.payload);
      return {
        ...state,
        questions: decodeQuestions,
        answers: shuffleAnswers(decodeQuestions[0]),
      };
    case "SERVER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};