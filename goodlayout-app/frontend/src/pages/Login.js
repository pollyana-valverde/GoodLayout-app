import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";
import "../css/login.css";
import { Toast } from 'primereact/toast';
import { Form } from 'react-bootstrap';

import imgLogin from '../imagens/imgLogin.svg';

const Login = () => {
    const toast = useRef(null);
    const { setToken } = useAuth();
    const navegacao = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/login/${email}/${senha}`, {
                auth: { email, senha }
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


    return (
        <Container className="login" >
            <Toast ref={toast} />
            <Row>
                <Col lg={6} className="loginContainer flex flex-column justify-content-center align-items-center">
                    <h2 className="mt-4">Bem-vindo de volta!</h2>
                    <p>Entre na sua conta e volte de onde parou!</p>
                    <form onSubmit={handleLogin} className="w-12 mt-4">
                        <Form.Group controlId="formemail" className="mb-3 relative">
                            <label>Email</label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Coloque seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-3 relative">
                            <label>Senha</label>
                            <Form.Control
                                type="password"
                                name="senha"
                                placeholder="Coloque sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </Form.Group>
                        <div className="text-right"><Link to="#">Esqueceu sua senha?</Link></div>
                        <button className="w-12 my-3 " type="submit">Entrar</button>
                        <div className="flex justify-content-center mt-3">
                            <p className="mr-2">Não possui uma conta?</p> <Link to="/cadastro">Cadrastre-se</Link>
                        </div>
                    </form>
                </Col>
                <Col lg={6}> 
                <img src={imgLogin} alt='imgLogin' className='z-3  relative' width={550} height={480}/>
                 </Col>
            </Row>
        </Container>
    );
};

export default Login;
