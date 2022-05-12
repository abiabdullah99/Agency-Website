import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logos/logo.png";
import "./Navbar.css";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuItmes = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/protfolio"
        >
          ProtFolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/team"
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className="link" onClick={() => signOut(auth)}>
            Log Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="sticky top-0">
      <div className="navbar px-28 font-mono">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#fbd062] rounded-box w-52"
            >
              {menuItmes}
            </ul>
          </div>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ml-24">
          <ul className="menu menu-horizontal">{menuItmes}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
