import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import ClientsProfile from "../Pages/Buyer/ClientsProfile";
import UserTaskBoard from "../Pages/UserTaskBoard";
import TaskBoard from "../TaskBoard";
import PrivateRoute from "./PrivateRoute";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SigninModal />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard/admin" element={<TaskBoard />} />
        <Route path="/dashboard/user/:id" element={<UserTaskBoard />} />
        <Route path="/dashboard/clients/:id" element={<ClientsProfile />} />
      </Route>
      <Route path="*" element={<SigninModal />} />
    </Routes>
  );
};

export default AppRoute;
