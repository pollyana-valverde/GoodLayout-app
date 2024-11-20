import React  from "react";
import { Col } from 'react-bootstrap';
import ImgExclusive from '../imagens/jardim1.jpg';

export default function AnuncioMainRightHome({titulo, desc, tag, imgJardim}) {
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
                        <a href="/login">
                            <i className="pi pi-arrow-up-right"></i>
                        </a>
                    </Col>
                    <Col lg={6}>
                        <img src={imgJardim} alt="ImgExclusive" />
                    </Col>
                </div>
            </Col>
        </>
    )
};
