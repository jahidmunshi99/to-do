import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import { AuthProvider } from "../Providers/AuthProvider.jsx";
import UserTaskList from "../TaskBoard/TaskList/UserTaskList.jsx";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SigninModal />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <UserTaskList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<SigninModal />} />

        {/* <Route element={<AuthLayout />}> */}
        {/* <Route path="login" element={<SigninModal />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
};

export default AllRoutes;
