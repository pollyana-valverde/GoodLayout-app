import React from "react";
import { Row, Col } from 'react-bootstrap';


export default function TextMediumHome() {
    return (
        <Row className="textMediumHome flex justify-content-between align-items-center">
            <Col lg={6}>
                <h1>Coleções selecionadas</h1>
                <p> Descobra todos os estilos de decoração</p>
            </Col>
            <Col lg={6}>
                <p> Lorem ipsum dolor sit amet consectetur, <strong>adipisicing elit. Ducimus quis,</strong> nihil praesentium voluptate rerum neque nisi blanditiis <strong>veritatis accusantium delectus ipsa,</strong> voluptatem quam, maiores numquam.</p>
            </Col>
        </Row>
    )
};
