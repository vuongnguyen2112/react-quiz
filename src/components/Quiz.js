import { useContext, useEffect } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiURL = "https://opentdb.com/api.php?amount=10&encode=url3986";

  useEffect(() => {
    if (quizState.questions.length > 0 || quizState.error) {
      return;
    }

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_QUESTIONS", payload: data.results })
      )
      .catch((error) => {
        dispatch({ type: "SERVER_ERROR", payload: error.message });
      });
  });
  return (
    <div className="quiz">
      {quizState.error && (
        <div className="results">
          <div className="congratulations">Server Error!</div>
          <div className="results-info">
            <h4>{quizState.error}</h4>
          </div>
        </div>
      )}
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <h4>You have completed the quiz.</h4>
            <div>
              You've got {quizState.correctAnswersCount} of{" "}
              {quizState.questions.length} correct
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <button
            type="button"
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_ACTION" })}
          >
            Next question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
