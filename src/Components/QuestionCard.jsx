
import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelect
}) {
  return (
    <section className="question-card">
      <p className="question-label">
        QUESTION {questionNumber}
      </p>

      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            selected={selectedAnswer === option}
            onSelect={() => onSelect(option)}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;
