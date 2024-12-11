import React from "react";
import { useAuth } from '../provider/AuthProvider';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/catalogo.css';

import CarroselCatalago from "../components/CarroselCatalogo";

export default function Suporte() {
    const { tokenGL } = useAuth();
    // const userData = tokenGL ? JSON.parse(tokenGL) : null;

    return (
        <>
            <Container fluid className="mt-8">
                <Row className="flex text-center mt-2 catalogoHeader p-4">
                    {!tokenGL ? (
                        <>
                            <h1>Conheça um pouco do nosso catálogo</h1>
                            <p>Tenha acesso a alguns produtos do nosso catálago.</p>
                            <p>Para acessar tudo o que temos faça <a href="/Login">login.</a></p>
                        </>
                    ) : (
                        <>
                            <h1>Esse é nosso catálogo</h1>
                            <p>Esteja por dentro das últimas tendências de decoração e jardim.</p>
                            <p>Fique por dentro de tudo!</p>
                        </>
                    )}
                </Row>
                <Row className="flex text-center mt-2">
                    <CarroselCatalago />
                </Row>
                {/* <Row className="flex text-center mt-2">
                    <CarroselCatalago />
                </Row>
                <Row className="flex text-center mt-2">
                    <CarroselCatalago />
                </Row>
                <Row className="flex text-center mt-2">
                    <CarroselCatalago />
                </Row> */}
            </Container>
        </>
    )
}