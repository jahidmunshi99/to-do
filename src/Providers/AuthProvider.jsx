import { createContext, useContext, useState } from "react";
import {
  signinWithEmailPassword,
  singInWithGoogle,
} from "../Authentication/auth";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const handleLoginWithGoogle = singInWithGoogle();
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(handleLoginWithGoogle);
  const handleLoginwithEmailAndPassowrd = signinWithEmailPassword();

  return (
    <AuthContext.Provider
      value={{ user, loading, handleLoginwithEmailAndPassowrd }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
