
function ResultCard({
  total,
  correct,
  incorrect,
  percentage
}) {
  return (
    <section className="result-card">
      <div className="result-icon">✓</div>

      <p className="eyebrow">QUIZ COMPLETED</p>
      <h2>Your Results</h2>

      <div className="score-circle">
        <strong>{correct}/{total}</strong>
        <span>Final Score</span>
      </div>

      <p className="result-percentage">{percentage}%</p>

      <div className="result-stats">
        <div className="stat-box">
          <span>Correct Answers</span>
          <strong className="correct-text">{correct}</strong>
        </div>

        <div className="stat-box">
          <span>Incorrect Answers</span>
          <strong className="incorrect-text">{incorrect}</strong>
        </div>

        <div className="stat-box">
          <span>Total Questions</span>
          <strong>{total}</strong>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
