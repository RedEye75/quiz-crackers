import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizQuestions = () => {
  const data = useLoaderData();
  const quizQuestions = data.data;
  const { name, questions } = quizQuestions;
  //   console.log(quizQuestions);
  return (
    <div>
      <h1 className="text-5xl font-extrabold">{name}</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question}></Question>
      ))}
    </div>
  );
};

export default QuizQuestions;
