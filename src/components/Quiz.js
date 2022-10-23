import React from "react";
import { useLoaderData } from "react-router-dom";
import PerTopic from "./PerTopic";
const Quiz = () => {
  const data = useLoaderData();
  const quizes = data.data;
  console.log(quizes);
  return (
    <div>
      {quizes.map((quiz) => (
        <PerTopic key={quiz.id} quiz={quiz}></PerTopic>
      ))}
    </div>
  );
};

export default Quiz;
