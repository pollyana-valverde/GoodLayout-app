import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../provider/AuthProvider';
import '../css/navegacao.css';

import Rotas from "../Routes";


export default function Navbar() {
    const { tokenGL } = useAuth();

    // Lista de links públicos
    const [linksPublicos] = useState([
        {
            caminho: "/",
            nome: "Home",
        },
        {
            caminho: "#2",
            nome: "Catálogo",
        },
        {
            caminho: "#3",
            nome: "Suporte",
        },
        {
            caminho: "#4",
            nome: "Sobre nós",
        },
        {
            caminho: "#5",
            nome: "Outro",
        }
    ]);

    // Estado para rastrear o link ativo
    const [activeLink, setActiveLink] = useState(() => {
        // Recupera o link ativo do localStorage, se existir
        const savedLink = localStorage.getItem("activeLink");
        return savedLink ? JSON.parse(savedLink) : linksPublicos[0];
    });

    // Função para atualizar o link ativo e salvar no localStorage
    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", JSON.stringify(link));
    };

    // Efeito para atualizar o estado inicial com base no localStorage
    // useEffect(() => {
    //     const savedLink = localStorage.getItem("activeLink");
    //     if (savedLink) {
    //         setActiveLink(JSON.parse(savedLink));
    //     }
    // }, []);

    return (
        <Container fluid>
            {!tokenGL && (
                <Row className="flex justify-content-between my-4 align-items-center text-center">
                    <Col lg={3}>
                        <a href="#">Logo</a>
                    </Col>
                    <Col lg={3}>
                        <div className="navegacaoLinks">
                            {linksPublicos.map((link) => (
                                <a
                                    key={link.nome}
                                    href={link.caminho}
                                    className={activeLink.nome === link.nome ? "activeLink" : ""}
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link.nome}
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="navegacaoLogin">
                            <a href="/login">Login</a>
                        </div>
                    </Col>
                </Row>
            )}

            {tokenGL && (
                <Row className="flex justify-content-between my-4 align-items-center text-center">
                    <Col lg={3}>
                        <a href="#">Logo</a>
                    </Col>
                    <Col lg={3}>
                        <div className="navegacaoLinks">
                            {linksPublicos.map((link) => (
                                <a
                                    key={link.nome}
                                    href={link.caminho}
                                    className={activeLink.nome === link.nome ? "activeLink" : ""}
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link.nome}
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="navegacaoLogin">
                            <a href="/login">Logout</a>
                        </div>
                    </Col>
                </Row>
            )}
            <Col ><Rotas /></Col>
        </Container>
    );
}
