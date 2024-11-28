import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Toast } from 'primereact/toast';

export default function SuporteForm() {
    const toast = useRef(null);
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        pergunta: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        value = value.replace(/(\d)(\d{4})$/, '$1$2');
        setFormData((prevData) => ({
            ...prevData,
            telefone: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3002/suportePergunta', formData);
            toast.current.show({
                severity: 'success',
                summary: 'Mensagem enviada com sucesso!',
                life: 3000
            });
            setFormData({
                nome: '',
                sobrenome: '',
                email: '',
                telefone: '',
                pergunta: '',
            });

        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
        }
    };


    return (
        <>
            <Toast ref={toast} />
            <form onSubmit={handleSubmit} className="w-7 suporteContainer">
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group controlId="formemail" className="mb-2 relative">
                            <label>Nome</label>
                            <Form.Control
                                type="text"
                                name="nome"
                                placeholder="Coloque seu nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formemail" className="mb-2 relative">
                            <label>Sobrenome</label>
                            <Form.Control
                                type="text"
                                name="sobrenome"
                                placeholder="Coloque seu sobrenome"
                                value={formData.sobrenome}
                                onChange={handleChange}
                                maxLength="14"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group controlId="formemail" className="mb-2 relative">
                            <label>Email</label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Coloque seu email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group controlId="formemail" className="mb-2 relative">
                            <label>Telefone</label>
                            <Form.Control
                                type="text"
                                name="telefone"
                                placeholder="Coloque seu Telefone"
                                value={formData.telefone}
                                onChange={handleNumberChange}
                                maxLength="15"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group className="mb-2 relative" controlId="exampleForm.ControlTextarea1">
                            <label>Mensagem</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="pergunta"
                                placeholder="Coloque seu mensagem ou pergunta"
                                value={formData.pergunta}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="w-12" type="submit">Enviar mensagem</button>
                    </Col>
                </Row>
            </form>


        </>
    )
}