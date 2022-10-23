import React from "react";

const LearnMore = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-3 gap-4 ">
      <div className="font-bold border-2 p-9">
        <h1 className="text-3xl mb-2">1. How does React Context API works??</h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="font-bold border-2 p-9">
        <h1 className="text-3xl mb-2">
          2. What is the purpose of react router ??
        </h1>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="font-bold border-2 p-9">
        <h1 className="text-3xl mb-2">3. What is the use of useRef hook ??</h1>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
