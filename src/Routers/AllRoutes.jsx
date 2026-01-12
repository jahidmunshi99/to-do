import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import { AuthProvider, UseAuth } from "../Providers/AuthProvider.jsx";
import TaskBoard from "../TaskBoard";
import UserTaskList from "../TaskBoard/TaskList/UserTaskList";
import PrivateRoute from "./PrivateRoute";

const DashBoardWrapper = () => {
  const { userRole } = UseAuth();
  return userRole === "admin" ? <TaskBoard /> : <UserTaskList />;
};

// const { userRole } = UseAuth();

const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SigninModal />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashBoardWrapper />} />
        </Route>
        <Route path="*" element={<SigninModal />} />
      </Routes>
    </AuthProvider>
  );
};

export default AllRoutes;
