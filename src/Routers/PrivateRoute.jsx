// import { useNavigate } from "react-router";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router";
import { DotLoader } from "react-spinners";
import { auth } from "../Firebase/firebase.config";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  // const navigate = useNavigate();
  // const { user, loading, error } = UseAuth();
  if (loading) {
    return <DotLoader color="#57ffa3" />;
  }

  if (error) return <div>{error}</div>;

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateRoute;
