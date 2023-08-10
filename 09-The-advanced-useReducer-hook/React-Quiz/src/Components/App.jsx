import Header from "./Header.jsx";
import Main from "./Main.jsx";
import StartScreen from "./Main/StartScreen.jsx";
import Progress from "./Main/Progress.jsx";
import { useEffect, useReducer } from "react";
import Loader from "./Main/Loader.jsx";
import Question from "./Main/Question.jsx";

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
      return { ...state, status: "active" };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "newAnswer":
      return { ...state, answer: action.payload };
  }
};

function App() {
  const [{ status, questions, index, answer, answerSelected }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
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
              question={questions[index]}
              index={index}
              answer={answer}
            />
            <Question
              question={questions[index]}
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
