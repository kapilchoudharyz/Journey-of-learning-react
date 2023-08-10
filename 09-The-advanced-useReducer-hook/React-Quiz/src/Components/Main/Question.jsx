import Options from "./Options.jsx";

function Question({ question, dispatch, answerSelected, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        Question={question}
        dispatch={dispatch}
        answerSelected={answerSelected}
        answer={answer}
      />
    </div>
  );
}

export default Question;
