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

    const [errors, setErrors] = useState({
        senhaMatch: false,
        requiredFields: {}
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors.requiredFields[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                requiredFields: {
                    ...prevErrors.requiredFields,
                    [name]: false
                }
            }));
        }
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

    const validateFields = () => {
        const requiredFieldsByStep = [
            'email',
            'telefone',
            'pergunta',
        ];
        const currentRequiredFields = requiredFieldsByStep;
        const newErrors = {};

        currentRequiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = true;
            }
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            requiredFields: newErrors
        }));

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) {
            setErrors((prevErrors) => ({
                ...prevErrors
            }));
            return;
        }

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
                        <Form.Group controlId="nome" className="mb-2 relative">
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
                        <Form.Group controlId="sobrenome" className="mb-2 relative">
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
                        <Form.Group controlId="email" className={errors.requiredFields.email ? 'mb-0 relative w-12 flex flex-column' : 'mb-2 relative w-12 flex flex-column'} >
                            <label className={errors.requiredFields.email ? 'errorText' : ''}>Email</label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Coloque seu email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.requiredFields.email ? 'errorInputCadastro' : ''}
                            />
                            {errors.requiredFields.email && <small className="errorText">Campo obrigatório</small>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group controlId="telefone" className={errors.requiredFields.telefone ? 'mb-0 relative w-12 flex flex-column' : 'mb-2 relative w-12 flex flex-column'} >
                            <label className={errors.requiredFields.telefone ? 'errorText' : ''}>Telefone</label>
                            <Form.Control
                                type="text"
                                name="telefone"
                                placeholder="Coloque seu Telefone"
                                value={formData.telefone}
                                onChange={handleNumberChange}
                                maxLength="15"
                                className={errors.requiredFields.telefone ? 'errorInputCadastro' : ''}
                            />
                            {errors.requiredFields.telefone && <small className="errorText">Campo obrigatório</small>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className=" flex justify-content-center align-items-center">
                    <Col>
                        <Form.Group className={errors.requiredFields.pergunta ? 'mb-0 relative w-12 flex flex-column' : 'mb-2 relative w-12 flex flex-column'}  controlId="pergunta">
                            <label className={errors.requiredFields.pergunta ? 'errorText' : ''}>Mensagem</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="pergunta"
                                placeholder="Coloque seu mensagem ou pergunta"
                                value={formData.pergunta}
                                onChange={handleChange}
                                className={errors.requiredFields.pergunta ? 'errorInputCadastro' : ''}
                            />
                            {errors.requiredFields.pergunta && <small className="errorText">Campo obrigatório</small>}
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