import React from "react";
import { Link } from "react-router-dom";

const PerTopic = ({ quiz }) => {
  return (
    <div className="ml-10 grid lg:grid-cols-1">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 rounded-lg" src={quiz.logo} alt="Album" />
        </figure>

        <div className="card-body rounded-lg bg-indigo-100 h-64  m-10">
          <h2 className="card-title text-3xl font-bold  justify-center">
            {quiz.name}
          </h2>
          <p className="font-bold">Total Quiz : {quiz.total}</p>

          <div className="card-actions font-bold  justify-center">
            <button className="btn text-black bg-orange-200 ">
              <Link to={`/quiz/${quiz.id}`}>Try Yourself</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerTopic;
