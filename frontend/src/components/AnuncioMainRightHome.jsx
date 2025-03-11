import React from "react";
import { Col } from 'react-bootstrap';
import ImgExclusive from '../imagens/jardim1.jpg';

export default function AnuncioMainRightHome({ titulo, desc, tag, imgJardim }) {
    return (
        <>
            <Col className="flex flex-wrap justify-content-center ">
                <div className="flex flex-nowrap align-items-center justify-content-center gap-4 anuncioRightHome ">
                    <Col lg={7} className=" flex flex-column gap-2">
                        <div className="align-items-center w-12 flex justify-content-between">
                            <h5 className="exclusive">{tag}</h5>
                            <a href="/login">
                                <i className="pi pi-arrow-up-right"></i>
                            </a>
                        </div>
                        <div className="anuncioRightHomeText">
                            <h4>{titulo}</h4>
                            <p> {desc}
                            </p>
                        </div>

                    </Col>
                    <Col  className="flex flex-wrap justify-content-center ">
                        <img src={imgJardim} alt="ImgExclusive" />
                    </Col>
                </div>
            </Col>
        </>
    )
};
