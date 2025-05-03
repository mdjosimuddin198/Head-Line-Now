import React, { use } from "react";
import NavBar from "../components/NavBar";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../components/Provider/AuthProvider";

const LoginPage = () => {
  const { loginAccount } = use(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    loginAccount(email, password)
      .then((result) => {
        const user = result.user.email;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl text-accent text-center font-semibold">
            Login your account
          </h3>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
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
