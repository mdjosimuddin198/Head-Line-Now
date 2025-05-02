import React, { Children } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../pages/HomeLayout";
import NewsCategories from "../components/NewsCategories";
import NewsDetails from "../components/NewsDetails";
import NewCardDetails from "../components/NewCardDetails";
import Login from "../components/Login";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0" replace></Navigate>,
      },
      {
        path: "/categories/:id",
        loader: async () => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data;
        },
        Component: NewsDetails,
      },
    ],
  },
  {
    path: "/news/:id",
    loader: async () => {
      const res = await fetch("/news.json");
      const data = await res.json();
      return data;
    },

    Component: NewCardDetails,
  },
  {
    path: "/auth/login",
    Component: LoginPage,
  },
  {
    path: "/auth/register",
    Component: RegisterPage,
  },
  {
    path: "*",
    element: <h3>Error404</h3>,
  },
]);

export default Router;
