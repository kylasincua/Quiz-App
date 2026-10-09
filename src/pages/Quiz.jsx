
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.js";
import QuizHeader from "../Components/QuizHeader";
import ProgressBar from "../Components/ProgressBar";
import QuestionCard from "../Components/QuestionCard";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];

  function handleSelect(option) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [question.id]: option,
    }));
  }

  function handleNext() {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      const correctAnswers = questions.filter(
        (item) => answers[item.id] === item.answer
      ).length;

      const incorrectAnswers = questions.length - correctAnswers;
      const percentage = Math.round(
        (correctAnswers / questions.length) * 100
      );

      navigate("/result", {
        state: {
          total: questions.length,
          correct: correctAnswers,
          incorrect: incorrectAnswers,
          percentage,
        },
      });
    }
  }

  return (
    <main className="app-page">
      <div className="quiz-container">
        <QuizHeader />

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          questionNumber={currentQuestion + 1}
          selectedAnswer={selectedAnswer}
          onSelect={handleSelect}
        />

        <div className="quiz-navigation">
          <span className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <button
            className="primary-button next-button"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
            <span>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Quiz;
