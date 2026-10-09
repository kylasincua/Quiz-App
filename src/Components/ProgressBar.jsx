
function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-section">
      <div className="progress-label">
        <span>Progress</span>
        <span>{current} of {total}</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Quiz progress"
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
