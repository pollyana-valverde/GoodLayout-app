
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
// import { Editor } from "primereact/editor";

import '../css/stepDescricoes.css';

export default function BasicDemo() {
    const [text, setText] = useState('');
    const [peso, setPeso] = useState(5);
    const [altura, setAltura] = useState(50);
    const [largura, setLargura] = useState(50);
    const [profundidade, setProfundidade] = useState(50);
    const [estoque, setEstoque] = useState(50);

    const [madeira, setMadeira] = useState(null);
    const [acabamento, setAcabamento] = useState(null);
    const [revestimento, setRevestimento] = useState(null);
    const [ferragens, setFerragens] = useState(null);
    const [vidros, setVidros] = useState(null);

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


    const [colors, setColors] = useState([]); // Estado para armazenar as cores
    const [newColor, setNewColor] = useState(''); // Estado para a nova cor

    // Função para adicionar a cor
    const addColor = () => {
        if (newColor.trim()) {
            setColors([...colors, newColor]);
            setNewColor(''); // Limpa o input após adicionar
        }
    };

    // Função para remover uma cor
    const removeColor = (index) => {
        const updatedColors = colors.filter((_, i) => i !== index);
        setColors(updatedColors);
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
                        <InputNumber inputId="peso" className="w-12" value={peso} onValueChange={(e) => setPeso(e.value)} min={0} prefix="Peso " suffix=" Kg" minFractionDigits={2} maxFractionDigits={3} useGrouping={false} />
                        <InputNumber inputId="altura" className="w-12" value={altura} onValueChange={(e) => setAltura(e.value)} min={0} prefix="Altura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                    <div className="flex gap-2">
                        <InputNumber inputId="largura" className="w-12" value={largura} onValueChange={(e) => setLargura(e.value)} min={0} prefix="Largura " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                        <InputNumber inputId="profundidade" className="w-12" value={profundidade} onValueChange={(e) => setProfundidade(e.value)} min={0} prefix="Profundidade " suffix=" cm" minFractionDigits={2} useGrouping={false} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Cores</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className={`flex dimemsoesStepDescricoes ${colors.length === 0 ? 'gap-0' : 'gap-2'}`}>

                    <div className="flex gap-2 flex-nowrap align-items-center">
                        {colors.map((color, index) => (
                            <div className="relative border-circle"
                                key={index}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: color,
                                    border: '1px solid var(--oliveWoodLow)',
                                }}
                            >
                                <div className=" removeColorDescricoes flex align-items-center justify-content-center">
                                    <i className="pi pi-times text-xs" onClick={() => removeColor(index)}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    {colors.length < 11 ? (
                        <div className="flex gap-2 w-12">
                            <InputText className="w-12" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
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
                            value={madeira}
                            showClear
                            onChange={(e) => setMadeira(e.value)}
                            options={tiposMadeira}
                            optionLabel="name"
                            placeholder="Tipos de madeira"
                            filter className="w-full " />
                        <Dropdown
                            value={ferragens}
                            showClear
                            onChange={(e) => setFerragens(e.value)}
                            options={tiposFerragen}
                            optionLabel="name"
                            placeholder="Tipos de ferragem"
                            filter className="w-full " />
                    </div>
                    <div className="flex gap-2">
                        <Dropdown
                            value={revestimento}
                            showClear
                            onChange={(e) => setRevestimento(e.value)}
                            options={tiposRevestimento}
                            optionLabel="name"
                            placeholder="Tipos revestimento"
                            filter className="w-full " />
                        <Dropdown
                            value={acabamento}
                            showClear
                            onChange={(e) => setAcabamento(e.value)}
                            options={tiposAcabamento}
                            optionLabel="name"
                            placeholder="Tipos acabamento"
                            filter className="w-full " />
                    </div>
                    <Dropdown
                        value={vidros}
                        showClear
                        onChange={(e) => setVidros(e.value)}
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
                    <InputNumber inputId="minmax" value={estoque} onValueChange={(e) => setEstoque(e.value)} min={0} />
                </Col>
            </Col>
        </Row>
    )
}
