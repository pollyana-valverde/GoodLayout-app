import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import MainHome from "../components/MainHome";
import MediumHome from "../components/MediumHome";
import EndHome from "../components/EndHome";
import TextLeftHome from "../components/TextMainLeftHome";

import '../css/home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="flex my-4">
                <MainHome />
            </Row>
            <Row className="flex flex-column my-5">
                <MediumHome />
            </Row>
            <Row className="flex my-5">
                <EndHome />
            </Row>
            <Row className="mainLeftHome p-4 ">
                <div>
                    <Col>
                    </Col>
                </div>
                <div>
                    <Col className="textLeftHome z-2" >
                        <TextLeftHome />
                    </Col>
                </div>
            </Row>
        </Container>
    )
}