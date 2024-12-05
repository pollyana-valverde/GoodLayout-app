import React, { useState, useEffect, useRef } from "react";
import { useAuth } from '../provider/AuthProvider';
import noImage from '../imagens/noUserProfileImg.webp';

import '../css/sidebarAdm.css';

const ConfigProfile = ({ isOpen, toggleSidebar }) => {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;
    const [showDashboard, setShowDashboard] = useState(false)
    const [showOrder, setShowOrder] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showBuyer, setShowBuyer] = useState(false)
    const [showCustomers, setShowCustomers] = useState(false)
    const [showInvoices, setShowInvoices] = useState(false)

    const toggleDashboard = () => {
        setShowDashboard((prevState) => !prevState);
    }

    const toggleOrder = () => {
        setShowOrder((prevState) => !prevState);
    }

    const toggleProducts = () => {
        setShowProducts((prevState) => !prevState);
    }

    const toggleBuyer = () => {
        setShowBuyer((prevState) => !prevState);
    }

    const toggleCustomers = () => {
        setShowCustomers((prevState) => !prevState);
    }

    const toggleInvoices = () => {
        setShowInvoices((prevState) => !prevState);
    }

    const showAccordions = [
        {
            icon: 'pi-chart-bar',
            header: 'Dashboard',
            constShow: showDashboard,
            constShowLinks: [
                {
                    link: '/dashboardAdmin',
                    linkName: 'Geral',
                },
                {
                    link: '/meusPedidos',
                    linkName: 'Pedidos',
                },
            ],
            toggleFunction: toggleDashboard,
        },
        {
            icon: 'pi-file-export',
            header: 'Order',
            constShow: showOrder,
            constShowLinks: [
                {
                    link: '/dashboardAdmin',
                    linkName: 'Geral',
                },
                {
                    link: '/meusPedidos',
                    linkName: 'Pedidos',
                },
                {
                    link: '/dashboardAdmin',
                    linkName: 'Geral',
                },
                {
                    link: '/meusPedidos',
                    linkName: 'Pedidos',
                },
            ],
            toggleFunction: toggleOrder,
        },
        {
            icon: 'pi-sitemap',
            header: 'Products',
            constShow: showProducts,
            constShowLinks: [
                {
                    link: '',
                    linkName: '',
                }
            ],
            toggleFunction: toggleProducts,
        },
        {
            icon: 'pi-wallet',
            header: 'Buyer',
            constShow: showBuyer,
            constShowLinks: [
                {
                    link: '',
                    linkName: '',
                }
            ],
            toggleFunction: toggleBuyer,
        },
        {
            icon: 'pi-headphones',
            header: 'Customers',
            constShow: showCustomers,
            constShowLinks: [
                {
                    link: '',
                    linkName: '',
                }
            ],
            toggleFunction: toggleCustomers,
        },
        {
            icon: 'pi-receipt',
            header: 'Invoices',
            constShow: showInvoices,
            constShowLinks: [
                {
                    link: '',
                    linkName: '',
                }
            ],
            toggleFunction: toggleInvoices,
        },
    ]


    return (

        <>
            <div className={`fixed left-0 m-2 sidebarAdm ${isOpen ? 'sidebarAdm-open' : 'sidebarAdm-closed'}`}>
                <div className={`flex gap-2 ${isOpen ? 'open' : 'closed'}`}>

                    <div className='flex gap-2 align-items-center'>
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

                        <i onClick={toggleSidebar} className={isOpen ? "pi pi-times border-circle" : "pi pi-bars mt-3"}></i>
                    </div>
                </div>
                <div className='flex flex-column justify-content-between mt-3 ' style={{ height: '90%' }}>
                    <div className="flex flex-column gap-1">
                        {showAccordions.map((show) => (
                            <div className="sidebarAccordion">
                                <div className="flex align-items-center justify-content-between ">
                                    <div className="flex align-items-center gap-2 sidebarAccordionHeader">
                                        <i className={`pi ${show.icon}`}></i>
                                        <p style={{ margin: 'unset' }}>{show.header}</p>
                                    </div>
                                    <i className={show.constShow ? "pi pi-angle-up" : "pi pi-angle-down"} onClick={show.toggleFunction}></i>
                                </div>
                                {show.constShow && (
                                    <ul className="flex flex-column line-height-3">
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
                            <i className="pi pi-envelope"></i>
                            <p style={{ margin: 'unset' }}>Email</p>
                        </a>
                        <a href="/Logout" className="flex align-items-center gap-2">
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