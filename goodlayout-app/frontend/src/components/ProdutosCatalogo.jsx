import React from "react";
import { Col } from 'react-bootstrap';
// import ImgExclusive from '../imagens/jardim1.jpg';

import '../css/tabContentMediumHome.css';

export default function ProdutosCatalago({ tag, imgJardim }) {
    return (
        <div className="flex flex-wrap tabContentMediumHome">
            <Col className="flex flex-wrap justify-content-center">
                <div className="relative ">
                    <img className="border-round-2xl" src={imgJardim} alt="ImgExclusive" style={{width:'250px', height:'250px', objectFit:'cover'}} />
                    <div className="absolute top-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute bottom-0 m-2">{tag}</h5>
                </div>
            </Col>
        </div>
    )
};
