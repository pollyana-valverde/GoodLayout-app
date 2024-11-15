import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "./Pages/Home";
import Login from './Pages/Login';

const Rotas = () => {
  const { tokenGL } = useAuth();

  const rotasSomenteAutenticados = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: < Home />
        },
        {
            path: "/login",
            element: <Login />
          },
      ],
    },
  ];

  const rotasNaoAutenticados = [
    {
      path: "/",
      element: <Home />,
    },
     {
      path: "/login",
      element: <Login />
    },
  ];

  const router = createBrowserRouter([
    ...(!tokenGL ? rotasNaoAutenticados : []),
    ...rotasSomenteAutenticados,
  ]);


  return <RouterProvider router={router} />;
};

export default Rotas;
