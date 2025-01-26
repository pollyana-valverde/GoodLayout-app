import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "./Pages/Home";
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Privacidade from "./Pages/Privacidade";
import Suporte from "./Pages/Suporte";
import AboutUs from "./Pages/AboutUs";
import Catalogo from "./Pages/Catalogo";
import ListaDesejo from "./Pages/Cliente/ListaDesejos";
import CarrinhoCompra from "./Pages/Cliente/CarrinhoCompra";
import Config from "./Pages/Config";
import MeusPedidos from "./Pages/Cliente/MeusPedidos";
import DetalhesProduto from "./Pages/Cliente/DetalhesProduto";

import DashboardAdmin from "./Pages/Adm/DashboardAdmin";
import AddProduto from "./Pages/Adm/AddProduto";
import AllClientes from "./Pages/Adm/AllClientes";
import AllPedidos from "./Pages/Adm/AllPedidos";
import AllProdutos from "./Pages/Adm/AllProdutos";
import Cancelamentos from "./Pages/Adm/Cancelamentos";
import CompradoresBloqueados from "./Pages/Adm/CompradoresBloqueados";
import DetalhesPedido from "./Pages/Adm/DetalhesPedido";
import GrupoClientes from "./Pages/Adm/GrupoClientes";
import TopBuyers from "./Pages/Adm/TopBuyers";


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
          path: '/EnterAccount',
          element: <EnterAccount />,
        },
        {
          path: "/Logout",
          element: <Logout />,
        },
        {
          path: "/",
          element: <Catalogo  />
        },
        {
          path: "/listaDesejo",
          element: <ListaDesejo  />
        },
        {
          path: "/carrinhoCompra",
          element: <CarrinhoCompra  />
        },
        {
          path: "/config",
          element: <Config  />
        },
        {
          path: "/meusPedidos",
          element: <MeusPedidos  />
        },
        {
          path: "/detalhesProduto",
          element: <DetalhesProduto  />
        },


        //Páginas do adm
        {
          path: "/dashboardAdmin",
          element: 
            <DashboardAdmin /> 
        },
        {
          path: "/addProduto",
          element: 
            <AddProduto /> 
        },
        {
          path: "/produto/:idProduto",
          element: <AddProduto />,
        },
        {
          path: "/AllClientes",
          element: 
            <AllClientes /> 
        },
        {
          path: "/AllPedidos",
          element: 
            <AllPedidos /> 
        },
        {
          path: "/AllProdutos",
          element: 
            <AllProdutos /> 
        },
        {
          path: "/Cancelamentos",
          element: 
            <Cancelamentos /> 
        },
        {
          path: "/CompradoresBloqueados",
          element: 
            <CompradoresBloqueados /> 
        },
        {
          path: "/DetalhesPedido",
          element: 
            <DetalhesPedido /> 
        },
        {
          path: "/GrupoClientes",
          element: 
            <GrupoClientes /> 
        },
        {
          path: "/TopBuyers",
          element: 
            <TopBuyers /> 
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
    {
      path: "/Privacidade",
      element: <Privacidade />
    },
    {
      path: "/Suporte",
      element: <Suporte />
    },
    {
      path: "/AboutUs",
      element: <AboutUs />
    },
    {
      path: "/Catalogo",
      element: <Catalogo />
    },
  ];

  const router = createBrowserRouter([
    ...(!tokenGL ? rotasNaoAutenticados : []),
    ...rotasSomenteAutenticados,
  ]);


  return <RouterProvider router={router} />;
};

export default Rotas;
