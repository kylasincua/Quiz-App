
function AnswerOption({ option, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className="answer-radio">
        {selected ? "●" : "○"}
      </span>

      <span>{option}</span>
    </button>
  );
}

export default AnswerOption;
