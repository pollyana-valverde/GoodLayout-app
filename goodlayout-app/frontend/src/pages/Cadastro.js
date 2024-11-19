import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Toast } from 'primereact/toast';
// import "../css/formulario.css";

const Cadastro = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [showTermsError, setShowTermsError] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: '',
        confirmarSenha: '',
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

        if (name === 'confirmarSenha') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                senhaMatch: formData.senha !== value
            }));
        }
    };


    const validateFields = () => {
        const requiredFieldsByStep = {
            1: ['nome', 'email', 'sobrenome'],
            2: ['cpf', 'endereco', 'telefone'],
            3: ['senha', 'confirmarSenha']
        };
        const currentRequiredFields = requiredFieldsByStep[step];
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

        if (!validateFields() || formData.senha !== formData.confirmarSenha || !acceptedTerms) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                senhaMatch: formData.senha !== formData.confirmarSenha
            }));
            setShowTermsError(!acceptedTerms);
            return;
        }

        try {
            await axios.post('http://localhost:3001/cadastroNovoUsuario', formData);
            toast.current.show({
                severity: 'success',
                summary: 'Cadastro concluído com sucesso!',
                detail: <a href="/login">Ok</a>,
                life: 3000
            });
            setFormData({
                nome: '',
                sobrenome: '',
                email: '',
                cpf: '',
                endereco: '',
                telefone: '',
                senha: '',
                confirmarSenha: '',
            });
            setStep(1);
            navigate("/login");
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
        }
    };

    const nextStep = () => {
        if (validateFields()) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const handlePrivaciadeClick = () => {
        window.open(`/Privacidade`, '_blank');
    };


    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setFormData((prevData) => ({
            ...prevData,
            cpf: value
        }));
    };
    return (
        <Container className="cadastro">
            <Toast ref={toast} />
            <Row >
                <Col lg={6}></Col>
                <Col lg={6} className="loginContainer flex flex-column justify-content-center align-items-center">
                    <h2 className="mt-4">Criar conta</h2>
                    <p>Crie uma conta e tenha acesso a tudo no nosso site!</p>
                    <form onSubmit={handleSubmit} className="w-12 mt-4">

                        {step === 1 && (
                            <div className="w-12 flex flex-column gap-3">
                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.nome ? 'errorText' : ''}>Nome</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="Coloque seu primeiro nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className={errors.requiredFields.nome ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.nome && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.sobrenome ? 'errorText' : ''}>Sobrenome</label>
                                    <input
                                        type="text"
                                        name="sobrenome"
                                        placeholder="Coloque seu sobrenome"
                                        value={formData.sobrenome}
                                        onChange={handleChange}
                                        className={errors.requiredFields.sobrenome ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.sobrenome && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.email ? 'errorText' : ''}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Coloque seu email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.requiredFields.email ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.email && <small className="errorText">Campo obrigatório</small>}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="w-12 flex flex-column gap-3">
                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.cpf ? 'errorText' : ''}>CPF</label>
                                    <input
                                        type="text"
                                        name="cpf"
                                        placeholder="Coloque seu CPF"
                                        value={formData.cpf}
                                        onChange={handleCpfChange}
                                        maxLength="14"
                                        className={errors.requiredFields.cpf ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.cpf && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.endereco ? 'errorText' : ''}>Endereço</label>
                                    <input
                                        type="text"
                                        name="endereco"
                                        placeholder="Coloque seu endereço"
                                        value={formData.endereco}
                                        onChange={handleChange}
                                        className={errors.requiredFields.endereco ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.endereco && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.telefone ? 'errorText' : ''}>Telefone</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        placeholder="Coloque seu telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        maxLength="11"
                                        className={errors.requiredFields.telefone ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.telefone && <small className="errorText">Campo obrigatório</small>}
                                </div>

                            </div>
                        )}

                        {step === 3 && (
                            <div className="w-12 flex flex-column gap-3">
                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.senha ? 'errorText' : ''}>Senha</label>
                                    <input
                                        type="password"
                                        name="senha"
                                        placeholder="Coloque sua senha"
                                        value={formData.senha}
                                        onChange={handleChange}
                                        className={errors.requiredFields.senha ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.requiredFields.senha && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="w-12 flex flex-column relative">
                                    <label className={errors.requiredFields.confirmarSenha ? 'errorText' : ''}>Confirmar senha</label>
                                    <input
                                        type="password"
                                        name="confirmarSenha"
                                        placeholder="Confirme sua senha"
                                        value={formData.confirmarSenha}
                                        onChange={handleChange}
                                        className={errors.senhaMatch || errors.requiredFields.confirmarSenha ? 'errorInputCadastro' : ''}
                                    />
                                    {errors.senhaMatch && <small className="errorText">As senhas não coincidem</small>}
                                    {errors.requiredFields.confirmarSenha && <small className="errorText">Campo obrigatório</small>}
                                </div>

                                <div className="cadastroTerms">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={() => {
                                            setAcceptedTerms(!acceptedTerms);
                                            setShowTermsError(false);
                                        }}
                                    />
                                    <span style={{ color: 'var(--black)' }}> Aceito os <Link onClick={handlePrivaciadeClick}>termos e condições.</Link></span> <br />
                                    {showTermsError && <small className="errorText">Você deve aceitar os termos</small>}
                                </div>

                            </div>
                        )}
                        <div className="gap-2 flex mt-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="w-6">Voltar</button>
                            )}

                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="w-12">Próximo</button>
                            ) : (
                                <button type="submit" className="w-6">Cadastrar</button>
                            )}

                        </div>
                    </form>

                    <div className="flex justify-content-center mt-5">
                        <p className="mr-2">Já possui uma conta?</p> <Link to="/login">Faça Login</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cadastro;
