import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl text-accent text-center font-semibold">
            Login your account
          </h3>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <h3 className="font-semibold">
              Dont't Have An Account ? {""}
              <Link className="text-secondary " to="/auth/register">
                Register
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
