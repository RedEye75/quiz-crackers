import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Learn New Skill Gain More Education
            </h1>
            <p className="mt-6 mb-8 font-bold text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              “Learning is great for your brain at every age,” . “As you take on
              a new skill, the mind begins to reshape itself because the
              physical brain is malleable..!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg  font-bold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                <Link className="bg-red-200 p-5 px-9 rounded-lg" to="/myclass">
                  Get started
                </Link>
              </button>
              <button
                type="button"
                className=" p-5 px-9  m-2 text-lg  font-bold rounded-lg bg-lime-200 dark:text-gray-900"
              >
                <Link to={"/learnMore"}>Learn more</Link>
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/1646-GDU-Learn_to_Code_Blog_Header_.max-1000x1000.png"
          alt=""
          className="w-6/12 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
    </div>
  );
};

export default Header;
