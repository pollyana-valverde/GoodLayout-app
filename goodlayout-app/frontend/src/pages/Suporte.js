import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../css/suporte.css';


export default function Suporte() {
    return (
        <>
            <Container fluid className="suporteHeader">
                <Row>
                    <h1>Contate nossa equipe</h1>
                    <p>Tem alguma pergunta específica sobre a nossa marca? Estamos aqui pra ajudar.</p>
                    <p>Converse com a nossa amigável equipe 24/7 e espere pela sua resposta ;)</p>
                </Row>

                <Row className="suporteContainer flex flex-column justify-content-center align-items-center">
                    <form  className="w-12 mt-4">
                    <Form.Group controlId="formemail" className="mb-3 relative">
                            <label>Email</label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Coloque seu email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-3 relative">
                            <label>Senha</label>
                            <Form.Control
                                type="password"
                                name="senha"
                                placeholder="Coloque sua senha"
                                // value={senha}
                                // onChange={(e) => setSenha(e.target.value)}
                            />
                        </Form.Group>
                    </form>
                </Row>
            </Container>

        </>
    )
}