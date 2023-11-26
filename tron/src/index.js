import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CoffeePage from "./pages/Coffee";
import SongPage from "./pages/Song";
import Navbar from "./components/Navbar";
import PostsPage from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Coffee",
    element: <CoffeePage />,
  },
  {
    path: "/Song",
    element: <SongPage />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Posts",
    element: <PostsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
