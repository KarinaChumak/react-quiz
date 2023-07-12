function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React QUIZ</h2>
      <h3> {numQuestions} questions to improve your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        {' '}
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
