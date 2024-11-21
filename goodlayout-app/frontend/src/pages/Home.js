import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import MainHome from "../components/MainHome";
import MediumHome from "../components/MediumHome";
import EndHome from "../components/EndHome";

import '../css/home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="flex my-4">
                <MainHome/>
            </Row>
            <Row className="flex flex-column my-5">
                <MediumHome/>
            </Row>
            <Row className="flex my-5">
                <EndHome/>
            </Row>
        </Container>
    )
}