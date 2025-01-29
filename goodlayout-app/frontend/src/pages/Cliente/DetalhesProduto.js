import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import GeralDetalhesProduto from "../../components/GeralDetalhesProduto";
import TabDetalhesProduto from "../../components/TabDetalhesProduto";


export default function DetalhesProduto() {
    return (
        <Container className="mt-8 flex flex-column gap-5">
            <Row>
                <GeralDetalhesProduto />
            </Row>
            <Row>
                <TabDetalhesProduto />
            </Row>
        </Container>
    )
}