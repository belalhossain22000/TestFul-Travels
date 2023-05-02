import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const creatUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const user = "user";
  const authInfo = {
    user,
    googleLogin,
    creatUser,
  };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
