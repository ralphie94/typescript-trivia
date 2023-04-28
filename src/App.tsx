import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from "./components/QuestionCard";

import { QuestionState } from "./API";

type AnswerObject  = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions());


  const startTrivia = async () => {

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
    <div className="App">
      <h1>Trivia</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard questionNr={number + 1} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer} /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
