import React, { use, useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading";

const PrivetRoute = ({ children }) => {
  const { logedInUser, setLogedInUser, loading, setLoadig } =
    useContext(Authcontext);
  const location = useLocation();
  //   console.log(loading);
  //   console.log(location.pathname);
  if (loading) {
    return <Loading></Loading>;
  }

  if (logedInUser && logedInUser?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivetRoute;
