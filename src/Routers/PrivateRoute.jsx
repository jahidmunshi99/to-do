import { Navigate } from "react-dom";
import { useAuth } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  return user ? children : <Navigate to="/signin" replace />;
};
export default PrivateRoute;
