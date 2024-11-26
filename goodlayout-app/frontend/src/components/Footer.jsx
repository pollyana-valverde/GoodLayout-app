import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../css/navegacao.css';

import Rotas from "../Routes";


export default function Footer() {

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

    return (
        <Container fluid>
                <Row className="flex justify-content-between my-4 align-items-center text-center">
                    <Col lg={3}>
                        <a style={{color:'var(--oliveWood)'}} className="text-lg font-bold" href="#">RoadGarden</a>
                    </Col>
                    <Col lg={3}>
                        <div className="navegacaoLinks">
                            {linksPublicos.map((link) => (
                                <a
                                    key={link.nome}
                                    href={link.caminho}
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
            
        </Container>
    );
}
