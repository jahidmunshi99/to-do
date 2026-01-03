// import { useNavigate } from "react-router";
import { useNavigate } from "react-router";
import { UseAuth } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const { user, loading } = UseAuth();
  console.log(user);
  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return user ? children : navigate("/");
};
export default PrivateRoute;
