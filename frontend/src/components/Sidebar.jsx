import React, { useState, useEffect, useRef } from "react";
import { useAuth } from '../provider/AuthProvider';
import noImage from '../imagens/noUserProfileImg.webp';

import '../css/sidebarAdm.css';

const ConfigProfile = ({ isOpen, setIsOpen }) => {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;
    const [showAccordion, setShowAccordion] = useState(null)

    const toggleSidebar = () => {
        setShowAccordion(null);
        setIsOpen(!isOpen);
    };

    const toggleAccordion = (index) => {
        setShowAccordion((prevState) => (prevState === index ? null : index));
        setIsOpen(true);
    }

    const showAccordions = [
        {
            icon: 'pi-file-export',
            header: 'Pedidos',
            constShowLinks: [
                {
                    link: '/AllPedidos',
                    linkName: 'Todos',
                },
                {
                    link: '/DetalhesPedido',
                    linkName: 'Detalhes ',
                },
                {
                    link: '/Cancelamentos',
                    linkName: 'Cancelados',
                },
            ],
        },
        {
            icon: 'pi-users',
            header: 'Clientes',
            constShowLinks: [
                {
                    link: '/AllClientes',
                    linkName: 'Todos',
                },
                {
                    link: '/TopBuyers',
                    linkName: 'Top buyers',
                },
                {
                    link: '/CompradoresBloqueados',
                    linkName: 'Bloqueados',
                },
                {
                    link: '/GrupoClientes',
                    linkName: 'Grupos',
                },
            ],
        },
        {
            icon: 'pi-envelope',
            header: 'Emails',
            constShowLinks: [
                {
                    link: '/',
                    linkName: 'Entrada',
                },
                {
                    link: '/',
                    linkName: 'Saída',
                },
                {
                    link: '/',
                    linkName: 'Suporte',
                },
                {
                    link: '/',
                    linkName: 'Templates',
                },
            ],
        },
    ]

    const [activeLink, setActiveLink] = useState(() => {
        // Recupera o link ativo do localStorage, se existir
        const savedLink = localStorage.getItem("activeLink");
        return savedLink ? JSON.parse(savedLink) : showAccordion.constShowLinks[0];
    });

    // Função para atualizar o link ativo e salvar no localStorage
    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", JSON.stringify(link));
    };



    return (

        <>
            <div className={`fixed left-0 m-2 sidebarAdm ${isOpen ? 'sidebarAdm-open' : 'sidebarAdm-closed'}`}>
                <div className={`flex gap-2 ${isOpen ? 'open' : 'closed'}`}>

                    <div className='flex gap-2 align-items-center headerOpenSidebar'>
                        {isOpen && (
                            <>
                                <img
                                    className='border-circle '
                                    src={userData.imgPerfilCadastro ? `http://localhost:3001${userData.imgPerfilCadastro}` : noImage}
                                    alt="Descrição da imagem"
                                    width="35"
                                    height="35"
                                />
                                <div className="flex flex-column ">
                                    <h5 className='mt-2 text-sm' style={{ margin: 'unset' }}>{userData.nome} {userData.sobrenome}</h5>
                                    <p className="text-xs" style={{ margin: 'unset' }}>administradora</p>
                                </div>
                            </>
                        )}


                    </div>
                    <i onClick={toggleSidebar} className={`iconOpenClose ${isOpen ? "pi pi-arrow-left" : "pi pi-arrow-right "}`}></i>
                </div>
                <div className={`flex flex-column justify-content-between  ${isOpen ? 'mt-3' : 'mt-6'}`} style={{ height: '90%' }}>
                    <div className="flex flex-column gap-1">
                        <div className="sidebarAccordion ml-2">
                            <div className={`flex align-items-center justify-content-between sidebarAccordionHeader`}>
                                <a href="/dashboardAdmin">
                                    <div className="flex align-items-center gap-2 ">
                                        <i className={`pi pi-chart-bar`}></i>
                                        <p style={{ margin: 'unset' }}>Dashboard</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="sidebarAccordion ml-2">
                            <div className={`flex align-items-center justify-content-between sidebarAccordionHeader`}>
                                <a href="/AllProdutos">
                                    <div className="flex align-items-center gap-2 ">
                                        <i className={`pi pi-sitemap`}></i>
                                        <p style={{ margin: 'unset' }}>Produtos</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {showAccordions.map((show, index) => (
                            <div key={index} className="sidebarAccordion ml-2">
                                <div className={`flex align-items-center justify-content-between sidebarAccordionHeader ${showAccordion === index ? "open" : ""}`} onClick={() => toggleAccordion(index)}>
                                    <div className="flex align-items-center gap-2 ">
                                        <i className={`pi ${show.icon}`}></i>
                                        <p style={{ margin: 'unset' }}>{show.header}</p>
                                    </div>
                                    <i className={showAccordion === index ? "pi pi-angle-up" : "pi pi-angle-down"} ></i>
                                </div>
                                {showAccordion === index && (
                                    <ul className="flex flex-column gap-1  sidebarAccordionContent">
                                        {Array.isArray(show.constShowLinks) &&
                                            show.constShowLinks.map((linkGroup, index) => (
                                                <li
                                                    // onClick={() => handleLinkClick(linkGroup.link)}
                                                    // className={activeLink.nome === linkGroup.linkName ? "activeLink" : ""}
                                                    >
                                                    <a href={linkGroup.link}>{linkGroup.linkName}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-column gap-1 sidebarFooter " >
                        <a href="/config" className="flex align-items-center gap-2">
                            <i className="pi pi-cog"></i>
                            <p style={{ margin: 'unset' }}>Configurações</p>
                        </a>
                        <a href="/Logout" className="flex align-items-center gap-2 sidebarLogout">
                            <i className="pi pi-sign-out"></i>
                            <p style={{ margin: 'unset' }}>Sair</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ConfigProfile;