import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-sky-100 p-3 m-5 rounded-lg">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case font-mono font-bold text-3xl">
            Codecademy
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-bold ">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/myclass"}>My classes</Link>
            </li>
            <li>
              <Link to={"/rechart"}>Demography</Link>
            </li>

            <li>
              <Link to={"/learnMore"}>learn More</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
