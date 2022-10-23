import React from "react";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const Question = ({ question }) => {
  //   console.log(question);
  const { options, correctAnswer } = question;
  const handleAnswer = (option) => {
    // console.log("click");
    if (option === correctAnswer) {
      toast.success("Correct");
    } else {
      toast.error("opps..!! wrong");
    }
  };
  const rightAnswer = (correctAnswer) => {
    toast.info(correctAnswer);
  };
  return (
    <div className="max-w-6xl lg:mx-auto sm:mx-8 mb-10 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="p-6 relative space-y-8 ">
        <div className="space-y-2 my-2 mx-24 ">
          <h1 className="text-2xl font-bold">{question.question}</h1>
          <p className="absolute top-8 right-10">
            <button onClick={() => rightAnswer(correctAnswer)}>
              <FaEye className="text-3xl"></FaEye>
            </button>
          </p>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
            {options.map((option) => (
              <button
                onClick={() => handleAnswer(option)}
                className="border-2 bg-lime-200 rounded-lg  py-5 my-5  font-semibold "
              >
                <label>
                  <li>{option}</li>
                </label>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
