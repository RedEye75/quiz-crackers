import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Demography from "./components/Demography";
import Error from "./components/Error";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";
import Quiz from "./components/Quiz";
import QuizQuestions from "./components/QuizQuestions";

import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/myclass",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/quiz/:quizNo",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizNo}`
            );
          },
          element: <QuizQuestions></QuizQuestions>,
        },
        { path: "/learnMore", element: <LearnMore></LearnMore> },
        {
          path: "/rechart",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Demography></Demography>,
        },
        {
          path: "*",
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
