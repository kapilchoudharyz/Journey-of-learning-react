import Header from "./Header.jsx";
import Main from "./Main.jsx";
import StartScreen from "./Main/StartScreen.jsx";
import Progress from "./Main/Progress.jsx";
import { useEffect, useReducer } from "react";
import Loader from "./Main/Loader.jsx";
import Question from "./Main/Question.jsx";
import question from "../../public/questions.json";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
};
const reducer = function (state, action) {
  switch (action.type) {
    case "loading":
      return "Hello";
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
    case "start":
      return { ...state, status: "active", index: 0 };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "newAnswer":
      return { ...state, answer: action.payload };
    case "result":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
  }
};

function App() {
  const [{ status, questions, index, answer, answerSelected }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:3000/questions")
      // eslint-disable-next-line no-unused-vars
      .then((data) => dispatch({ type: "dataReceived", payload: question }))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(questions);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress
              question={question.questions[index]}
              index={index}
              answer={answer}
            />
            <Question
              question={question.questions[index]}
              dispatch={dispatch}
              index={index}
              answerSelected={answerSelected}
              answer={answer}
            />
            {index < 14 ? (
              <button
                className={`btn btn-next btn-right`}
                onClick={() => dispatch({ type: "next" })}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Next
              </button>
            ) : (
              <button
                className="btn btn-end btn-right"
                onClick={() => dispatch({ type: "result" })}
              >
                Finish
              </button>
            )}
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
