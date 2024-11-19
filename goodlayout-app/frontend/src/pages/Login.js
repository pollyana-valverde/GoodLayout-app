import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";
import "../css/login.css";
import { Toast } from 'primereact/toast';
import { Form } from 'react-bootstrap';

const Login = () => {
    const toast = useRef(null);
    const { setToken } = useAuth();
    const navegacao = useNavigate();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/login/${cpf}/${senha}`, {
                auth: { cpf, senha }
            });

            if (Array.isArray(response.data) && response.data.length > 0) {
                setToken(JSON.stringify(response.data[0]));
                navegacao("/EnterAccount");
            } else {
                console.log("A resposta do servidor não contém os dados esperados.");
            }
        } catch (error) {
            console.error('Erro ao autenticar:', error);
            toast.current.show({ severity: 'error', summary: 'Erro ao entrar.', detail: 'Verifique se os dados estão corretos.', life: 3000 });
        }
    };

    useEffect(() => {
        if (data) {
            console.log("resposta: ", data);
        }
    }, [data]);

    useEffect(() => {
        document.title = "Login";
    }, []);

    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCpf(value);
    };

    return (
        <Container>
            <Toast ref={toast} />
            <Row>
                <Col lg={6} className="loginContainer flex flex-column justify-content-center align-items-center">
                    <h2 className="mt-4">Bem-vindo de volta!</h2>
                    <p>Entre na sua conta e tenha acesso a tudo no nosso site!</p>
                    <form onSubmit={handleLogin} className="w-12 mt-4">
                        <Form.Group controlId="formCpf" className="mb-3">
                            <label>Email</label>
                            <Form.Control
                                type="text"
                                name="cpf"
                                placeholder="CPF"
                                value={cpf}
                                onChange={handleCpfChange}
                                maxLength="14"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <label>Senha</label>
                            <Form.Control
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </Form.Group>
                        <Link to="/cadastro">Esqueceu sua senha?</Link>
                        <button className="w-12 my-3 " type="submit">Entrar</button>
                        <div className="flex justify-content-center mt-5">
                            <p className="mr-2">Não possui uma conta?</p> <Link to="/cadastro">Cadastre-se</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
