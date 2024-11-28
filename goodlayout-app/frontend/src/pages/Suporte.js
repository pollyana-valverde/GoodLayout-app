import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../css/suporte.css';

import SuporteContactInfo from "../components/SuporteContactInfo";
import SuporteForm from "../components/SuporteForm";

export default function Suporte() {
    return (
        <>
            <Container fluid className="suporteHeader ">
                <Row className="flex text-center mt-2">
                    <h1>Contate nossa equipe</h1>
                    <p>Tem alguma pergunta específica sobre a nossa marca? Estamos aqui pra ajudar.</p>
                    <p>Converse com a nossa amigável equipe 24/7 e espere pela sua resposta ;)</p>
                </Row>
                <div className="flex justify-content-between mt-6">
                    <SuporteForm/>
                    <SuporteContactInfo/>
                </div>
            </Container>

        </>
    )
}