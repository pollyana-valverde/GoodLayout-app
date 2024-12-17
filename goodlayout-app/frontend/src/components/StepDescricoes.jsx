
import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputNumber } from 'primereact/inputnumber';
import { Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { useLocation } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
// import { Editor } from "primereact/editor";

import '../css/stepDescricoes.css';

export default function StepDescricoes({ formData, setFormData, handleChange }) {
    const [tiposMadeira, setTiposMadeira] = useState([]);
    const [tiposAcabamento, setTiposAcabamento] = useState([]);
    const [tiposRevestimento, setTiposRevestimento] = useState([]);
    const [tiposVidro, setTiposVidro] = useState([]);
    const [tiposFerragen, setTiposFerragen] = useState([]);
    const location = useLocation();
    const { peso, altura, largura, profundidade, estoque, coresProduto, nomeCor, madeira, revestimento, ferragem, acabamento, vidro } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/tipos_madeiras");

                const newProductId = data.map(item => item.nome_madeira);
                setTiposMadeira(newProductId);

                console.log('nome madeira: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }

            try {
                const { data } = await axios.get("http://localhost:3002/tipos_revestimento");

                const newProductId = data.map(item => item.nome_revestimento);
                setTiposRevestimento(newProductId);

                console.log('nome tipos_revestimento: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de revestimento:", error);
            }

            try {
                const { data } = await axios.get("http://localhost:3002/tipos_acabamento");

                const newProductId = data.map(item => item.nome_acabamento);
                setTiposAcabamento(newProductId);

                console.log('nome tipos_acabamento: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }

            try {
                const { data } = await axios.get("http://localhost:3002/tipos_vidro");

                const newProductId = data.map(item => item.nome_vidro);
                setTiposVidro(newProductId);

                console.log('nome tipos_vidro: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }

            try {
                const { data } = await axios.get("http://localhost:3002/tipos_ferragens");

                const newProductId = data.map(item => item.nome_ferragem);
                setTiposFerragen(newProductId);

                console.log('nome tipos_ferragens: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }
        };

        fetchData();
    }, []);


    const [newColor, setNewColor] = useState(); // Estado para a nova cor

    // Função para adicionar a cor
    const addColor = () => {
        if (newColor && formData.coresProduto.length < 11) {
            // setColors([...colors, newColor]);
            setFormData(prevData => ({
                ...prevData,
                coresProduto: [...prevData.coresProduto, { nomeCor: newColor }],
            }));
            setNewColor(''); // Limpa o input após adicionar
        }
    };

    const handleAddColor = (e) => {
        if (e.key === 'Enter' && newColor) {
            e.preventDefault();
            addColor();
        }
    };


    // Função para remover uma cor
    const removeColor = (index) => {
        const updatedColors = formData.coresProduto.filter((_, i) => i !== index);
        setFormData(prevData => ({
            ...prevData,
            coresProduto: updatedColors,
        }));
    };


    return (
        <Row className="flex flex-wrap flex-column">
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Dimensões</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex flex-column gap-2 dimemsoesStepDescricoes">
                    <div className="flex gap-2 ">
                        <InputNumber inputId="peso" className="w-12" name="peso" value={formData.peso || peso} onValueChange={handleChange} min={0} prefix="Peso " suffix=" Kg" minFractionDigits={2} maxFractionDigits={3} useGrouping={false} />
                        <InputNumber inputId="altura" className="w-12" name="altura" value={formData.altura || altura} onValueChange={handleChange} min={0} prefix="Altura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                    <div className="flex gap-2">
                        <InputNumber inputId="largura" className="w-12" name="largura" value={formData.largura || largura} onValueChange={handleChange} min={0} prefix="Largura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                        <InputNumber inputId="profundidade" className="w-12" name="profundidade" value={formData.profundidade || profundidade} onValueChange={handleChange} min={0} prefix="Profundidade " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Cores</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className={`flex dimemsoesStepDescricoes ${formData.coresProduto.length === 0 ? 'gap-0' : 'gap-2'} ${coresProduto?.length === 0 ? 'gap-0' : 'gap-2'}`}>

                    <div className="flex gap-2 flex-nowrap align-items-center">
                            {formData.coresProduto.map((color, index) => (
                            <div className="relative border-circle"
                                key={index}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: color.nomeCor ,
                                    border: '1px solid var(--oliveWoodLow)',
                                }}
                            >
                                <div className=" removeColorDescricoes flex align-items-center justify-content-center">
                                    <i className="pi pi-times text-xs" onClick={() => removeColor(index)}></i>
                                </div>
                            </div>
                        ))}  {coresProduto?.map((color, index) => (
                            <div className="relative border-circle"
                                key={index}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: color.nomeCor,
                                    border: '1px solid var(--oliveWoodLow)',
                                }}
                            >
                                <div className=" removeColorDescricoes flex align-items-center justify-content-center">
                                    <i className="pi pi-times text-xs" onClick={() => removeColor(index)}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    {formData.coresProduto.length < 11 || coresProduto?.length < 11 ? (
                        <div className="flex gap-2 w-12">
                            <InputText className="w-12" value={newColor} onKeyDown={handleAddColor} onChange={(e) => setNewColor(e.target.value)} />
                            <Button className="addColorBtn"
                                icon="pi pi-plus"
                                onClick={addColor} />
                        </div>
                    ) : (<></>)}
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-start">
                <Col lg={4} className="flex flex-column">
                    <h5>Materiais</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex flex-column gap-2 dimemsoesStepDescricoes">
                    <div className="flex gap-2">
                        <Dropdown
                            name="madeira" value={formData.madeira || madeira} onChange={handleChange}
                            showClear
                            options={tiposMadeira}
                            optionLabel="name"
                            placeholder="Tipos de madeira"
                            filter className="w-full " />
                        <Dropdown
                            name="ferragem" value={formData.ferragem || ferragem} onChange={handleChange}
                            showClear
                            options={tiposFerragen}
                            optionLabel="name"
                            placeholder="Tipos de ferragem"
                            filter className="w-full " />
                    </div>
                    <div className="flex gap-2">
                        <Dropdown
                            name="revestimento" value={formData.revestimento || revestimento} onChange={handleChange}
                            showClear
                            options={tiposRevestimento}
                            optionLabel="name"
                            placeholder="Tipos revestimento"
                            filter className="w-full " />
                        <Dropdown
                            name="acabamento" value={formData.acabamento || acabamento} onChange={handleChange}
                            showClear
                            options={tiposAcabamento}
                            optionLabel="name"
                            placeholder="Tipos acabamento"
                            filter className="w-full " />
                    </div>
                    <Dropdown
                        name="vidro" value={formData.vidro || vidro} onChange={handleChange}
                        showClear
                        options={tiposVidro}
                        optionLabel="name"
                        placeholder="Tipos e detalhes de vidro"
                        filter className="w-full " />
                </Col>
            </Col>

            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Quantidade de estoque</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex flex-column dimemsoesStepDescricoes">
                    <InputNumber inputId="minmax" name="estoque" value={formData.estoque || estoque} onValueChange={handleChange} min={0} />
                </Col>
            </Col>
        </Row>
    )
}
