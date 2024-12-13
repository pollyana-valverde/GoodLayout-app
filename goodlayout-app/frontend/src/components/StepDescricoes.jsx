
import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Editor } from "primereact/editor";

import '../css/stepDescricoes.css';

export default function BasicDemo() {
    const [text, setText] = useState('');

    return (
        <div >
            <h5>Descrição detalhada do produto</h5>
            <p>Descreva melhor o produto, colocando suas qualidades e especificações tecnicas.</p>
            <Row>
                <Col>
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                </Col>
                <Col>
                    peso, altura, largura e outras específicações pra ficha tecnica
                    <br />
                    cores
                    <br />
                    quantidade de estoque
                </Col>
            </Row>
        </div>
    )
}
