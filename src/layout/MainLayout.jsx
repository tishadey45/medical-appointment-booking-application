import Navbar from "../components/Navbar";
import Home from "../pages/Home";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default MainLayout;
