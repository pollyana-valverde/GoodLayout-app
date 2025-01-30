import React from "react";
import { Col } from "react-bootstrap";
import { Divider } from 'primereact/divider';

export default function GarantiaDetalhesProduto() {
    return (
        <div className="flex garantiaDetalhesProduto_container">
            <Col className="flex align-items-center gap-3">
                <i class="fa-solid fa-tent-arrow-turn-left"></i>
                <div className="flex flex-column">
                    <h5 className="m-0">Fácil retorno</h5>
                    <p className="m-0">Tenha retorno gratuito nos produtos elegíveis.</p>
                </div>
            </Col>
            <Divider layout="vertical" />

            <Col className="flex align-items-center gap-3">
                <i class="fa-solid fa-truck-fast"></i>
                <div className="flex flex-column">
                    <h5 className="m-0">Transporte rápido</h5>
                    <p className="m-0">Transporte gratuito acima de R$100.</p>
                </div>
            </Col>
            <Divider layout="vertical" />

            <Col className="flex align-items-center gap-3">
                <i class="fa-solid fa-shield-halved"></i>
                <div className="flex flex-column">
                    <h5 className="m-0">Compra segura</h5>
                    <p className="m-0">Seus dados são protegidos.</p>
                </div>
            </Col>
        </div>
    )
}