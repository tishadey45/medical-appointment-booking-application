import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
     
      <div>
        <Outlet />
      </div>
       <div><Footer/></div>
    </div>
  );
};

export default MainLayout;
