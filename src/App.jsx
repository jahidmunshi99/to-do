import Footer from "./Components/Footer";
import Header from "./Components/Header/index";
import TaskBoard from "./TaskBoard";
function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] min-h-screen text-white">
      <Header />
      {/* <HeroSection /> */}
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
