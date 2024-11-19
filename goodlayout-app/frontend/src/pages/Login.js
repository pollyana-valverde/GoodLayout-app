import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";
// import "../css/login.css";
import { Toast } from 'primereact/toast';
import { Col, Form } from 'react-bootstrap';

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
    <div className="loginContainer">
      <Toast ref={toast} />
      <div className="loginWrapper">
        <div className="welcomeSection">
          <div className="welcomeGif"></div>
        </div>
        <div className="formSection">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <Form.Group controlId="formCpf" className="mb-3">
              <Form.Control
                className="form-controlLogin"
                type="text"
                name="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={handleCpfChange}
                maxLength="14"
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                className="form-controlLogin"
                type="password"
                name="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
            <Col className="mb-3">
              <button type="submit">Entrar</button>
            </Col>
            <div className="signupPrompt">
              <p>Não possui uma conta?</p> <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
