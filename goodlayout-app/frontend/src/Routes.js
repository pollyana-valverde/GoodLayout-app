import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "./Pages/Home";
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

import EnterAccount from "./Pages/EnterAccount";
import Logout from "./Pages/Logout";


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
          path: '/EnterAccount',
          element: <EnterAccount />,
        },
        {
          path: "/Logout",
          element: <Logout />,
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
    {
      path: "/cadastro",
      element: <Cadastro />
    },
  ];

  const router = createBrowserRouter([
    ...(!tokenGL ? rotasNaoAutenticados : []),
    ...rotasSomenteAutenticados,
  ]);


  return <RouterProvider router={router} />;
};

export default Rotas;
