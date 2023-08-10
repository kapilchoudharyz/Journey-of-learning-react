function StartScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>15 questions to test your React mastery</h3>
      <button
        className={`btn btn-ui`}
        onClick={() => dispatch({ type: "start" })}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
