import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import Blogs from "./pages/Blogs.jsx";
import Home from "./pages/Home.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-booking",
        element: <MyBookings />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
