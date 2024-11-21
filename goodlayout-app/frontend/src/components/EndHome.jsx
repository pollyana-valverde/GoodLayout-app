import React from "react";
import { Row, Col } from 'react-bootstrap';

import AnuncioEndHome from "./AnuncioEndHome";
import FaqEndHome from "./FaqEndHome";
import TextLeftHome from "./TextMainLeftHome";

import TagRightHome from "./TagMainRightHome";


import '../css/endhome.css';

export default function EndHome() {
    return (
        <>
            <Col lg={4}>
                <AnuncioEndHome />
                {/* <div className="mainLeftHome p-4 ">
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="textLeftHome">
                            <TextLeftHome/>
                            </Col>
                        </Row>
                    </div> */}
            </Col>
            <Col lg={8} className="flex align-items-center justify-content-center" >
                <FaqEndHome/>
                {/* <div className="mainRightHome ">
                    <Row>
                        <Col className="titleRightHome">
                            <h1>Descubra a essência de um jardim bem decorado de acordo com seu gosto</h1>
                        </Col>
                    </Row>
                    <Row >
                        <div className="flex flex-column gap-1 mt-4">
                            <TagRightHome />
                        </div>
                    </Row>
                </div> */}
            </Col>
        </>
    )
}