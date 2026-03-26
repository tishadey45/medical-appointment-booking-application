import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-6 sm:px-8 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div className="flex gap-2">
          <img className="w-6 h-6" src={logo} alt="" />
          <h1 className="font-semibold">Phudu</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/my-booking"}>My-Bookings</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-4xl  bg-blue-600 text-white">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
