import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";

import { AuthProvider } from "./contexts/AuthProvider";
import AppRoute from "./routes/AppRoute";
// import TaskBoard from "./TaskBoard";
// import { Outlet } from "react-router";
function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] min-h-screen text-white">
      <AuthProvider>
        <Header />
        <AppRoute />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
