import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
import ClientsProfile from "../Components/Pages/Buyer/ClientsProfile";
import UserTaskBoard from "../Components/Pages/UserTaskBoard";
import TaskBoard from "../TaskBoard";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
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

export default AllRoutes;
