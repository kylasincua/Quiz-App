
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <div className="home-content">
        <div className="home-badge">
          <span className="badge-dot" />
          INTERACTIVE LEARNING
        </div>

        <p className="home-welcome">
          Welcome to the
        </p>

        <h1>
          Frontend <span>Quiz!</span>
        </h1>

        <p className="home-description">
          Challenge yourself with 5 questions about HTML,
CSS, JavaScript, and React. Test your knowledge
and discover your score!
        </p>

        <button
          className="primary-button start-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz <span>→</span>
        </button>

        <div className="home-details">
          <span>5 Questions</span>
          <span>Multiple Choice</span>
          <span>Instant Scoring</span>
        </div>
      </div>

      <div className="home-decoration decoration-one" />
      <div className="home-decoration decoration-two" />
    </main>
  );
}

export default Home;
