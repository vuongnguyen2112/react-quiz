import React from "react";
import { createRoot } from "react-dom/client";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QuizProvider>
    <Quiz />
  </QuizProvider>
);
