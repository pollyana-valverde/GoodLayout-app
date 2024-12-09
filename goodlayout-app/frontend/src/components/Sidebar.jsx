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
                    link: '/dashboardAdmin',
                    linkName: 'Todos',
                },
                {
                    link: '/meusPedidos',
                    linkName: 'Detalhes ',
                },
                {
                    link: '/dashboardAdmin',
                    linkName: 'Cancelados',
                },
            ],
        },
        {
            icon: 'pi-sitemap',
            header: 'Produtos',
            constShowLinks: [
                {
                    link: '/',
                    linkName: 'Todos',
                },
                {
                    link: '/',
                    linkName: 'Adicionar',
                },
            ],
        },
        {
            icon: 'pi-users',
            header: 'Clientes',
            constShowLinks: [
                {
                    link: '/',
                    linkName: 'Todos',
                },
                {
                    link: '/',
                    linkName: 'Top buyers',
                },
                {
                    link: '/',
                    linkName: 'Bloqueados',
                },
                {
                    link: '/',
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
        // {
        //     icon: 'pi-receipt',
        //     header: 'Invoices',
        //     constShowLinks: [
        //         {
        //             link: '',
        //             linkName: '',
        //         }
        //     ],
        // },
    ]


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
                                <div className="flex align-items-center gap-2 ">
                                    <i className={`pi pi-chart-bar`}></i>
                                    <p style={{ margin: 'unset' }}>Dashboard</p>
                                </div>
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
                                                <li>
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
                        <a href="/#" className="flex align-items-center gap-2">
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