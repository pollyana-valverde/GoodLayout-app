import React from "react";
import { Row, Col } from 'react-bootstrap';

import AnuncioEndHome from "./AnuncioEndHome";
import FaqEndHome from "./FaqEndHome";



import '../css/endhome.css';

export default function EndHome() {
    return (
        <>
            <Col lg={8} className="flex align-items-center justify-content-center" >
                <FaqEndHome />
            </Col>
            <Col lg={4}>
                <AnuncioEndHome />
            </Col>
        </>
    )
}