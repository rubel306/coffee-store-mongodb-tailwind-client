import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./componets/Home/Home";
import AddCoffee from "./componets/AddCoffee/AddCoffee";
import ViewCoffee from "./componets/ViewCoffee/ViewCoffee";
import UpdateCoffee from "./componets/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://coffee-store-mongodb-tailwind-server-27v96cyfh-rubels-projects.vercel.app/coffees"
          ),
      },
    ],
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "coffees/:id",
    element: <ViewCoffee></ViewCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-mongodb-tailwind-server-27v96cyfh-rubels-projects.vercel.app/coffees/${params.id}`
      ),
  },
  {
    path: "/update/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-mongodb-tailwind-server-27v96cyfh-rubels-projects.vercel.app/update/${params.id}`
      ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
