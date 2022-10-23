import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-sky-100 p-3 m-5 rounded-lg">
      <div className="navbar">
        <div className="flex-1">
          <Link
            to={"/home"}
            className="btn btn-ghost normal-case  font-extrabold text-3xl"
          >
            Codecademy
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-bold ">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/myclass"}>My Classes</Link>
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
