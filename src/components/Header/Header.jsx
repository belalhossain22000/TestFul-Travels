import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Tasteful Travels
        </Link>
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
          
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div>
            <div data-tip={user.displayName} className="tooltip  tooltip-bottom">
              <img
                className="tooltip rounded-full w-8 h-8 mr-4  "
                src={user.photoURL}
                alt=""
              />
            </div>

            <NavLink
              onClick={handleLogout}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-blue-500 px-2 rounded-md menu menu-horizontal "
                  : isPending
                  ? "pending"
                  : ""
              }
              to="/login"
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-blue-500 px-2 rounded-md menu menu-horizontal "
                : isPending
                ? "pending"
                : ""
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
