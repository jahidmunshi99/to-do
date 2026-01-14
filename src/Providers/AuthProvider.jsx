import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createPost } from "../FetchData/createPost";
import { getPosts, getUsers } from "../FetchData/getPosts";
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

  {
    /* Fetch Users Inforation from DB */
  }
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        console.log(users);
        setUsersData(users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const testResult = async () => {
      setLoading(true);
      try {
        const result = await getPosts();
        setData(result);
        return result;
      } catch (error) {
        error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    testResult();
  }, []);

  {
    /** Get Users Email */
  }

  const loginWithGoogle = async (email, password) => {
    setLoading(true);
    try {
      const result = await singInWithGoogle(email, password);
      const correntUser = usersData.find(
        (item) => item.email === result.user_email
      );
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
      let users = usersData;

      if (users.length === 0) {
        users = await getUsers();
        setUsersData(users);
      }

      const result = await SignInWithEmail(email, password);
      const correntUser = usersData.find(
        (item) => item.email === result.user_email
      );

      if (!correntUser) {
        setUser(null);
        setUserRole(null);
        setMessage({
          error: true,
          msg: "Sorry, You are not registered!",
        });
        return;
      }
      setUser(result);
      setUserRole(correntUser.role);
      if (result.email === "jahidmunshi99@gmail.com") {
        navigate("/dashboard/admin");
      } else {
        navigate(`/dashboard/user/${correntUser.id}`);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
