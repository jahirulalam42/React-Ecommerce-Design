import React from "react";
import logo from "../../../assets/Brandless_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="container mx-auto px-40">
      <div className="navbar bg-base-100 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="kitchen">Products</Link>
            </li>
            <li>
              <a>Home</a>
            </li> 
            <li>
              <a>Nutrition</a>
            </li>
            <li>
              <a>Brands</a>
            </li>
            <li>
              <a>Bundless</a>
            </li>
            <li>
              <a>Clearence</a>
            </li>
            </ul>
          </div>

          <div>
            <img
              className="btn btn-ghost rounded-none normal-case"
              src={logo}
            ></img>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/kitchen">Products</Link>
            </li> 
            <li>
              <a>Nutrition</a>
            </li>
            <li>
              <a>Brands</a>
            </li>
            <li>
              <a>Bundless</a>
            </li>
            <li>
              <a>Clearence</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3v-1Z"
              />
            </svg>
          </button>

          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
