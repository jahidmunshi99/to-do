import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import UserTaskBoard from "../Components/Pages/UserTaskBoard";
import { AuthProvider } from "../Providers/AuthProvider.jsx";
import TaskBoard from "../TaskBoard";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SigninModal />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/admin" element={<TaskBoard />} />
          <Route path="/dashboard/user/:id" element={<UserTaskBoard />} />
        </Route>
        <Route path="*" element={<SigninModal />} />
      </Routes>
    </AuthProvider>
  );
};

export default AllRoutes;
