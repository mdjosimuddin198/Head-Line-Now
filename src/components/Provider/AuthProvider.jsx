import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const Authcontext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null);
  const [loading, setLoadig] = useState(true);

  const createAccoutnt = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoadig(false);
      setLogedInUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loggingOutUser = () => {
    return signOut(auth);
  };

  const updatedUser = (updatedata) => {
    updateProfile(auth.currentUser, updatedata);
  };

  const authdata = {
    logedInUser,
    setLogedInUser,
    createAccoutnt,
    loginAccount,
    loggingOutUser,
    updatedUser,
    loading,
    setLoadig,
  };
  return <Authcontext value={authdata}>{children}</Authcontext>;
};

export default AuthProvider;
