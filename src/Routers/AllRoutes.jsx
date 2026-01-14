import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import { AuthProvider } from "../Providers/AuthProvider.jsx";
import TaskBoard from "../TaskBoard";
import UserTaskList from "../TaskBoard/TaskList/UserTaskList";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SigninModal />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/admin" element={<TaskBoard />} />
          <Route path="/dashboard/user/:id" element={<UserTaskList />} />
        </Route>
        <Route path="*" element={<SigninModal />} />
      </Routes>
    </AuthProvider>
  );
};

export default AllRoutes;
