import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import TaskBoard from "../TaskBoard";
import UserTaskList from "../TaskBoard/TaskList/UserTaskList.jsx";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SigninModal />} />
      <Route path="/dashboard" element={<TaskBoard />} />
      <Route path="/dashboard/user" element={<UserTaskList />} />

      {/* <Route element={<AuthLayout />}> */}
      {/* <Route path="login" element={<SigninModal />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default AllRoutes;
