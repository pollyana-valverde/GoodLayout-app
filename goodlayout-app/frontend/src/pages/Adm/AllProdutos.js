import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import TabelaAllProdutos from "../../components/TabelaAllProdutos";


export default function AllProdutos() {
    return (
        <Container>
            <Row className="flex justify-content-center w-12 mt-4">
                <Col lg={12}>
                    <h5 className="text-sm" style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }}>Produtos / <span className="font-semibold">Todos os produtos</span></h5>
                </Col>
                <Col>
                <TabelaAllProdutos/>
                </Col>
            </Row>
        </Container>
    )
}