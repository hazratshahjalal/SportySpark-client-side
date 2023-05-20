import React from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Change initial value to null

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => { // Rename loggedUser to loginUser
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the logged-in user
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, registerUser, loginUser, logOut }; // Include user in authInfo

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};


export default AuthProvider;