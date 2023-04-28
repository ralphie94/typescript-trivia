import { shuffleArray } from './utils';

export type Question = {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async () => {
    const endpoint = "https://seinfeld-api.herokuapp.com/results";
    const data = await (await fetch(endpoint)).json();
    return data.map((question: Question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
  };