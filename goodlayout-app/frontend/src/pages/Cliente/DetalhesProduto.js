import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import GeralDetalhesProduto from "../../components/GeralDetalhesProduto";


export default function DetalhesProduto() {
    return (
        <Container className="mt-8 flex flex-column">
            <Row>
                <GeralDetalhesProduto />
            </Row>
        </Container>
    )
}