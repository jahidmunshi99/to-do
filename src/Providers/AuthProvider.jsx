import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createPost } from "../FetchData/createPost";
import { getPosts } from "../FetchData/getPosts";
import { SignInWithEmail, singInWithGoogle } from "../Firebase/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    msg: "",
  });
  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState(null);

  {
    /* Fetch Users Inforation from DB */
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const users = await getUsers();
        const users = await axios.get("https://phdb-api.onrender.com/users");
        // const dbPosts = await GetPosts();

        // setData(dbPosts);
        setUsersData(users.data);
      } catch (error) {
        console.log(error);
      }
    };

    const testResult = async () => {
      const result = await getPosts();
      setData(result);
      return result;
    };

    testResult();
    fetchUsers();
  }, []);

  {
    /** Get Users Email */
  }

  const loginWithGoogle = async (email, password) => {
    setLoading(true);
    try {
      const result = await singInWithGoogle(email, password);
      const correntUser = usersData.find((item) => item.email === result.email);
      setUserRole(correntUser?.role || null);
      if (correntUser) {
        setUser(result);
        navigate("/dashboard");
      } else {
        setUser(null);
        setMessage({
          error: true,
          msg: "Sorry You are not Registered in Our Server",
        });
      }
    } catch (error) {
      setMessage({ error: true, msg: error });
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      const result = await SignInWithEmail(email, password);
      const correntUser = usersData.find((item) => item.email === result.email);
      setUserRole(correntUser?.role || null);
      if (correntUser) {
        setUser(result);
        navigate("/dashboard");
      } else {
        setUser(null);
        setMessage({
          error: false,
          msg: "Sorry You are not Registered!",
        });
      }
    } catch (error) {
      setMessage({ error: true, msg: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithGoogle,
        loginWithEmail,
        usersData,
        message,
        setMessage,
        data,
        setData,
        userRole,
        createPost,
        search,
        setSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
