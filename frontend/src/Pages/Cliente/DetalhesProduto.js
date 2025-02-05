import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import GeralDetalhesProduto from "../../components/GeralDetalhesProduto";
import TabDetalhesProduto from "../../components/TabDetalhesProduto";
import GarantiaDetalhesProduto from "../../components/GarantiaDetalhesProduto";
import RelacionadosDetalhesProduto from "../../components/RelacionadosDetalhesProduto";
import '../../css/detalhesProdutos.css';

export default function DetalhesProduto() {
    return (
        <Container className="mt-7 flex flex-column">
            <Col lg={1} className="returnCatalogo_detalhesProdutos">
                <a href="/" className="mb-3">
                    <i className="pi pi-arrow-left font-bold mr-2"></i>
                    <p className='m-0 font-medium'>Voltar</p>
                </a>
            </Col>
            <div className="flex flex-column gap-5">
                <Row>
                    <GeralDetalhesProduto />
                </Row>
               
                <Row>
                    <GarantiaDetalhesProduto />
                </Row>
                <Row>
                    <TabDetalhesProduto />
                </Row>
                <Row>
                    <RelacionadosDetalhesProduto />
                </Row>
            </div>


        </Container>
    )
}