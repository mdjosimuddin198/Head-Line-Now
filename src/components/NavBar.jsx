import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import "../index.css";
import { Authcontext } from "./Provider/AuthProvider";

const NavBar = () => {
  const { logedInUser, loggingOutUser, setLogedInUser } = use(Authcontext);
  // console.log(logedInUser);

  const handleLogOutUser = () => {
    loggingOutUser()
      .then(() => {
        console.log("user logOut successfully");
        setLogedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="flex mt-5 gap-3 items-center justify-between">
      <div>{logedInUser && logedInUser.displayName}</div>
      <div>
        <ul className="text-accent flex gap-5 items-center text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-12 rounded-full"
          src={logedInUser ? logedInUser.photoURL : userIcon}
          alt=""
        />
        {logedInUser ? (
          <Link
            onClick={handleLogOutUser}
            className="btn btn-primary py-2 px-8"
          >
            LogOut
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary py-2 px-8">
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
