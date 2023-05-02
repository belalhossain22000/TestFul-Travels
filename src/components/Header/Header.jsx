import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content  rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "bg-blue-500" : isPending ? "pending" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "bg-blue-500" : isPending ? "pending" : ""
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "bg-blue-500" : isPending ? "pending" : ""
                }
              >
                uknown
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Tasteful Travels</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "bg-blue-500" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive ? "bg-blue-500" : isPending ? "pending" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "bg-blue-500" : isPending ? "pending" : ""
              }
            >
              uknNown
            </NavLink>
          </li>
        </ul>
      </div>
      <div  className="navbar-end ">
        <div data-tip="hello" className="tooltip  tooltip-bottom">
        <img
          className="tooltip rounded-full w-8 h-8 mr-4  "
          src="data:image/jpeg;base64,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"
          alt=""
        />
        </div>
        <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "bg-blue-500 px-2 rounded-md menu menu-horizontal px-1" : isPending ? "pending" : ""
                }
                to="/login"
              >
                Logou
                
              </NavLink>
      </div>
    </div>
  );
};

export default Header;
