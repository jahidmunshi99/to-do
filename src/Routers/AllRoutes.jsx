import { Route, Routes } from "react-router";
import SigninModal from "../Authentication/SinginModal/index";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SigninModal />} />
      {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} /> */}

      {/* <Route element={<AuthLayout />}> */}
      {/* <Route path="login" element={<SigninModal />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default AllRoutes;
