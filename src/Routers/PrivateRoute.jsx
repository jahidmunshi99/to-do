// import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { UseAuth } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  // const navigate = useNavigate();
  const { user, loading } = UseAuth();
  console.log(user);
  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  return user ? children : <Navigate to="/" />;
};
export default PrivateRoute;
