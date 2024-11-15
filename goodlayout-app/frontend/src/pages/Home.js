import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import ImgExclusive from '../imagens/kawai6.png';

import '../css/home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="flex  mt-5 mx-8">
                <Col >
                    <div className="mainLeftHome p-4 ">
                        <Row>
                            <Col>
                                <div className="tagLeftHome flex gap-2">
                                    <button type="button" className="activeTag">
                                        Ver produto 1
                                    </button>
                                    <button type="button">
                                        Ver produto 2
                                    </button>
                                    <button type="button">
                                        Ver produto 3
                                    </button>
                                    <button type="button">
                                        Ver produto 4
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="textLeftHome">
                                <h2>Jardim caseiro chic</h2>
                                <p> Bonito, aconchegante e estiloso</p>
                                <div className="callBacktLeftHome">
                                    <a href="#">
                                        <button type="button">
                                            Ver produto
                                        </button>
                                        <i className="pi pi-arrow-up-right"></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col >
                    <div className="mainRightHome p-4">
                        <Row>
                            <Col className="titleRightHome">
                                <h1>Descubra a essência dos móveis minimalistas Design & Estilo</h1>
                            </Col>
                        </Row>
                        <Row >
                            <div className="flex flex-column gap-6">
                                <Col className="flex gap-3 align-content-center justify-content-center tagRightHome">
                                    <button type="button" className="activeTag">
                                        Ver produto
                                    </button><button type="button">
                                        Ver produto
                                    </button><button type="button">
                                        Ver produto
                                    </button><button type="button">
                                        Ver produto
                                    </button>
                                </Col>
                                <Col className="flex flex-wrap justify-content-center  ">
                                    <div className="flex flex-wrap align-items-center justify-content-center gap-6 anuncioRightHome">
                                        <Col lg={5} className=" flex flex-column">
                                            <h5 className="exclusive">Exclusivo</h5>
                                            <div className="my-4 anuncioRightHomeText">
                                                <h2>Jardim caseiro chic</h2>
                                                <p> Bonito, aconchegante e estiloso
                                                    Bonito, aconchegante e estiloso
                                                </p>
                                            </div>
                                            <a href="#">
                                                <i className="pi pi-arrow-up-right"></i>
                                            </a>
                                        </Col>
                                        <Col lg={6}>
                                            <img src={ImgExclusive} alt="ImgExclusive"  />
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}