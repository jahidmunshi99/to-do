import Footer from "./Components/Footer";
import Header from "./Components/Header/index";
import { AuthProvider } from "./Providers/AuthProvider";

import AllRoutes from "./Routers/AllRoutes";
// import TaskBoard from "./TaskBoard";
// import { Outlet } from "react-router";
function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] min-h-screen text-white">
      <AuthProvider>
        <Header />
        <AllRoutes />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
