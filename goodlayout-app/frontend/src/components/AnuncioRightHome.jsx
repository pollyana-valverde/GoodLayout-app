import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ImgExclusive from '../imagens/jardimChic.jpg';

export default function AnuncioRightHome() {
    return (
        <>
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
                        <img src={ImgExclusive} alt="ImgExclusive" />
                    </Col>
                </div>
            </Col>
        </>
    )
};
