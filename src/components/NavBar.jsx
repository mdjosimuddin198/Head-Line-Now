import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="flex mt-5 gap-3 items-center justify-between">
      <div></div>
      <div>
        <ul className="text-accent flex gap-5 items-center text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-primary py-2 px-8">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
