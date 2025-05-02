import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="space-y-4">
      <button className="btn bg-white w-full text-black border-[#e5e5e5]">
        <FcGoogle size={20}></FcGoogle>
        Login with Google
      </button>
      <button className="btn w-full bg-black text-white border-black">
        <FaGithub size={20}></FaGithub>
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;
