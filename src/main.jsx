import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import MyBookings from "./pages/MyBookings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader : () => fetch("./data.json")

        //alternative
        loader: async () => {
          const res = await fetch(
            "https://raw.githubusercontent.com/tishadey45/medical-appointment-booking-application/refs/heads/main/public/data.json",
          );
          return res.json();
        },
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);





//default 

      //     loader: () =>  fetch(
        //  "https://raw.githubusercontent.com/tishadey45/medical-appointment-booking-application/refs/heads/main/public/data.json")