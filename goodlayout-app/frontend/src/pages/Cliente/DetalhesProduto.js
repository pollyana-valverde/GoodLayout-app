import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import GeralDetalhesProduto from "../../components/GeralDetalhesProduto";
import TabDetalhesProduto from "../../components/TabDetalhesProduto";
import GarantiaDetalhesProduto from "../../components/GarantiaDetalhesProduto";
import RelacionadosDetalhesProduto from "../../components/RelacionadosDetalhesProduto";

export default function DetalhesProduto() {
    return (
        <Container className="mt-8 flex flex-column">
            <Row>
                <a href="/">
                    <i className="pi pi-arrow-left font-bold mb-3" style={{ color: 'var(--tuscanRed)' }}></i>
                </a>
            </Row>
            <div className="flex flex-column gap-5">
                <Row>
                    <GeralDetalhesProduto />
                </Row>
                <Row>
                    <TabDetalhesProduto />
                </Row>
                <Row>
                    <GarantiaDetalhesProduto />
                </Row>
                <Row>
                    <RelacionadosDetalhesProduto />
                </Row>
            </div>


        </Container>
    )
}