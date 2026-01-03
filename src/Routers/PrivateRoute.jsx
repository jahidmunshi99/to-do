// import { useNavigate } from "react-router";
import { useNavigate } from "react-router";
import { DotLoader } from "react-spinners";
import { UseAuth } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const { user, loading } = UseAuth();
  console.log(user);
  if (loading) {
    return <DotLoader color="#57ffa3" />;
  }

  return user ? children : navigate("/");
};
export default PrivateRoute;
