import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import TagLeftHome from "../components/TagLeftHome";
import TextLeftHome from "../components/TextLeftHome";

import TagRightHome from "../components/TagRightHome";


import '../css/home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="flex mt-4">
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
                                <h1>Descubra a essência dos móveis minimalistas Design & Estilo</h1>
                            </Col>
                        </Row>
                        <Row >
                            <div className="flex flex-column gap-1 mt-4">
                            <TagRightHome/>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}