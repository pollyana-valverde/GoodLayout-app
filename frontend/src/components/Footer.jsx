import React, { useState } from "react";
import { useAuth } from '../provider/AuthProvider';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/rodape.css';



export default function Footer() {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;

    return (
        <Container fluid>
            {!tokenGL && (
                <Row className="flex justify-content-between mt-4 m-2 align-items-center text-center rodape">
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1 ">
                            <h5>Serviço</h5>
                            <a key='#' href="/Suporte" >
                                Suporte
                            </a>
                            <a key='#' href="/Privacidade" >
                                Privacidade
                            </a>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1" >
                            <h5>NewsLetter</h5>
                            <a key='#' href="/AboutUs" >
                                Sobre nós
                            </a>
                            <a key='login' href="/Login" >
                                Login
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} >
                        <a style={{ color: 'var(--creamyBiscotti)', opacity: '1'}} className="text-3xl font-bold " href="/">RoadGarden</a>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1">
                            <h5>Contato</h5>
                            <a key='#' href="#" >
                                Instagram
                            </a>
                            <a key='#' href="#" >
                                Facebook
                            </a>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1">
                            <h5>Consultas</h5>
                            <a key='#' href="#" >
                                road@example.com
                            </a>
                            <a key='/Login' href="#" >
                                garden@example.com
                            </a>
                        </div>
                    </Col>
                </Row>
            )}

            {tokenGL && userData?.tipoUser === 'cliente' && (
                <Row className="flex justify-content-between mt-4 m-2 align-items-center text-center rodape">
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1 ">
                            <h5>Serviço</h5>
                            <a key='#' href="/Suporte" >
                                Suporte
                            </a>
                            <a key='#' href="/Privacidade" >
                                Privacidade
                            </a>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1" >
                            <h5>NewsLetter</h5>
                            <a key='#' href="/AboutUs" >
                                Sobre nós
                            </a>
                            <a key='login' href="/Login" >
                                Login
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} >
                        <a style={{ color: 'var(--creamyBiscotti)', opacity: '1' }} className="text-3xl font-bold " href="/">RoadGarden</a>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1">
                            <h5>Contato</h5>
                            <a key='#' href="#" >
                                Instagram
                            </a>
                            <a key='#' href="#" >
                                Facebook
                            </a>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="flex flex-column text-left gap-1">
                            <h5>Consultas</h5>
                            <a key='#' href="#" >
                                road@example.com
                            </a>
                            <a key='/Login' href="#" >
                                garden@example.com
                            </a>
                        </div>
                    </Col>
                </Row>
            )}

        </Container>
    );
}
