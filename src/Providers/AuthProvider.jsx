import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SignInWithEmail, singInWithGoogle } from "../Firebase/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);

  {
    /* Fetch Users Inforation from DB */
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get("https://phdb-api.onrender.com/users");
        setUsersData(users.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  {
    /** Get Users Email */
  }
  const userEmail = usersData.map((item) => item.email);
  console.log(userEmail);

  const loginWithGoogle = async (email, password) => {
    setLoading(true);
    try {
      const result = await singInWithGoogle(email, password);
      setUser(result);
      const correntUser = usersData.find((item) => item.email === result.email);
      if (correntUser) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      const result = await SignInWithEmail(email, password);
      setUser(result);
      console.log(result);
      const correntUser = usersData.find((item) => item.email === result.email);
      if (correntUser) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, loginWithGoogle, loginWithEmail, usersData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
