import React from "react";
import {Row, Col } from 'react-bootstrap';

import TagLeftHome from "./TagMainLeftHome";
import TextLeftHome from "./TextMainLeftHome";

import TagRightHome from "./TagMainRightHome";


import '../css/home.css';

export default function MainHome() {



    return (
               <>
                <Col >
                    <div className="mainLeftHome p-4 ">
                        <Row>
                            <Col>
                                <TagLeftHome/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="textLeftHome">
                            <TextLeftHome/>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col >
                    <div className="mainRightHome ">
                        <Row>
                            <Col className="titleRightHome">
                                <h1>Descubra a essência de um jardim bem decorado de acordo com seu gosto</h1>
                            </Col>
                        </Row>
                        <Row >
                            <div className="flex flex-column gap-1 mt-4 w-12">
                            <TagRightHome/>
                            </div>
                        </Row>
                    </div>
                </Col>
               </>
    )
}