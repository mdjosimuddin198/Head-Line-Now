import React, { use } from "react";
import NavBar from "../components/NavBar";
import { Authcontext } from "../components/Provider/AuthProvider";

const RegisterPage = () => {
  const { createAccoutnt, logedInUser, setLogedInUser, updatedUser } =
    use(Authcontext);
  //   console.log(createAccoutnt());
  // console.log(logedInUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password, photo, name });

    createAccoutnt(email, password)
      .then((result) => {
        const user = result.user;
        updatedUser({ displayName: name, photoURL: photo })
          .then(() => {
            setLogedInUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setLogedInUser(user);
          });
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
            Register your account
          </h3>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              required
              placeholder="Name"
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              required
              placeholder="Photo Url"
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              required
              placeholder="Email"
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              required
              placeholder="Password"
            />
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
