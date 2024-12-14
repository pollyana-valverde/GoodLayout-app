
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
// import { Editor } from "primereact/editor";

import '../css/stepDescricoes.css';

export default function StepDescricoes({ formData, setFormData, handleChange }) {
    const tiposMadeira = [
        'Ano novo',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];
    const tiposAcabamento = [
        'Ano novo',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];
    const tiposRevestimento = [
        'Ano novo',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];
    const tiposFerragen = [
        'Ano novo',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];
    const tiposVidro = [
        'Ano novo',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];

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
                        <InputNumber inputId="peso" className="w-12" name="peso" value={formData.peso} onValueChange={handleChange} min={0} prefix="Peso " suffix=" Kg" minFractionDigits={2} maxFractionDigits={3} useGrouping={false} />
                        <InputNumber inputId="altura" className="w-12" name="altura" value={formData.altura} onValueChange={handleChange} min={0} prefix="Altura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                    <div className="flex gap-2">
                        <InputNumber inputId="largura" className="w-12" name="largura" value={formData.largura} onValueChange={handleChange} min={0} prefix="Largura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                        <InputNumber inputId="profundidade" className="w-12" name="profundidade" value={formData.profundidade} onValueChange={handleChange} min={0} prefix="Profundidade " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Cores</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className={`flex dimemsoesStepDescricoes ${formData.coresProduto.length === 0 ? 'gap-0' : 'gap-2'}`}>

                    <div className="flex gap-2 flex-nowrap align-items-center">
                        {formData.coresProduto.map((color, index) => (
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
                    {formData.coresProduto.length < 11 ? (
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
                        name="madeira" value={formData.madeira} onChange={handleChange}
                            showClear
                            options={tiposMadeira}
                            optionLabel="name"
                            placeholder="Tipos de madeira"
                            filter className="w-full " />
                        <Dropdown
                        name="ferragem" value={formData.ferragem} onChange={handleChange}
                            showClear
                            options={tiposFerragen}
                            optionLabel="name"
                            placeholder="Tipos de ferragem"
                            filter className="w-full " />
                    </div>
                    <div className="flex gap-2">
                        <Dropdown
                        name="revestimento" value={formData.revestimento} onChange={handleChange}
                            showClear
                            options={tiposRevestimento}
                            optionLabel="name"
                            placeholder="Tipos revestimento"
                            filter className="w-full " />
                        <Dropdown
                        name="acabamento" value={formData.acabamento} onChange={handleChange}
                            showClear
                            options={tiposAcabamento}
                            optionLabel="name"
                            placeholder="Tipos acabamento"
                            filter className="w-full " />
                    </div>
                    <Dropdown
                        name="vidro" value={formData.vidro} onChange={handleChange}
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
                    <InputNumber inputId="minmax" name="estoque" value={formData.estoque} onValueChange={handleChange} min={0} />
                </Col>
            </Col>
        </Row>
    )
}
