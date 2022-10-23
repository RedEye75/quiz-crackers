import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizQuestions = () => {
  const data = useLoaderData();
  const quizQuestions = data.data;
  console.log(quizQuestions);
  return (
    <div>
      <h1>here are all the questions</h1>
    </div>
  );
};

export default QuizQuestions;
