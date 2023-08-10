function Options({ Question, dispatch, answerSelected, answer }) {
  // console.log(question);
  const hasAnswered = answer != null;
  return (
    <div className="options">
      {Question.options.map((option, i) => (
        <button
          className={`btn btn-option
            ${answer === i ? " answer-selected " : ""} ${
            hasAnswered
              ? i === Question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
