import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import TabelaAllProdutos from "../../components/TabelaAllProdutos";
import FilterAllProdutos from "../../components/FilterAllProdutos";


export default function AllProdutos() {
    return (
        <Container>
            <Row className="flex justify-content-center w-12 mt-4">
                <Col lg={12}>
                    <h5 className="text-sm" style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }}>Produtos / <span className="font-semibold">Todos os produtos</span></h5>
                </Col>
            </Row>
            <Row className="flex">
                <Col lg={9}>
                    <TabelaAllProdutos />
                </Col>
                <Col lg={3}>
                    <FilterAllProdutos />
                </Col>
            </Row>


        </Container>
    )
}