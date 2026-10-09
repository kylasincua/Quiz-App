
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../Components/ResultCard";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const results = location.state || {
    total: 10,
    correct: 0,
    incorrect: 10,
    percentage: 0,
  };

  return (
    <main className="app-page result-page">
      <div className="result-container">
        <ResultCard
          total={results.total}
          correct={results.correct}
          incorrect={results.incorrect}
          percentage={results.percentage}
        />

        <div className="result-actions">
          <button
            className="primary-button"
            onClick={() => navigate("/quiz")}
          >
            Try Again <span>↻</span>
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}

export default Result;
