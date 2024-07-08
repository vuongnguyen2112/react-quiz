export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const decodeReponseQuestions = (questions) => {
  return questions.map((question) => {
    const incorrectAnswers = question.incorrect_answers.map((answer) =>
      decodeURIComponent(answer)
    );
    return {
      correctAnswer: decodeURIComponent(question.correct_answer),
      question: decodeURIComponent(question.question),
      incorrectAnswers,
    };
  });
};
