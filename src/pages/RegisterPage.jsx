import React from "react";
import NavBar from "../components/NavBar";

const RegisterPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl text-accent text-center font-semibold">
            Register your account
          </h3>
          <form className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Photo Url</label>
            <input type="text" className="input" placeholder="Photo Url" />
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
