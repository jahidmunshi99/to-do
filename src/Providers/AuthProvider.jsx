import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { getUsers } from "../FetchData/FetchData";
import { SignInWithEmail, singInWithGoogle } from "../Firebase/auth.service";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  {
    /* Fetch Users Inforation from DB */
  }

  const allUsers = async () => {
    try {
      const result = await getUsers();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = async (email, password) => {
    setLoading(true);
    try {
      const result = await singInWithGoogle(email, password);
      setUser(result);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async () => {
    setLoading(true);
    try {
      const result = await SignInWithEmail();
      setUser(result);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, loginWithGoogle, loginWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
