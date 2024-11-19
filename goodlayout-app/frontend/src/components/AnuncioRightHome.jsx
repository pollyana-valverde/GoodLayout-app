import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ImgExclusive from '../imagens/jardimChic.jpg';

export default function AnuncioRightHome({titulo, desc, tag, }) {
    return (
        <>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="flex flex-nowrap align-items-center justify-content-center gap-4 anuncioRightHome">
                    <Col lg={5} className=" flex flex-column ">
                        <h5 className="exclusive">{tag}</h5>
                        <div className="anuncioRightHomeText">
                            <h4>{titulo}</h4>
                            <p> {desc}
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
