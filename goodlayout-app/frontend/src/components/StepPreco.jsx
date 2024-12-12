import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";

import '../css/stepPreco.css';

export default function StepPreco() {
    const [selectedGrupoCliente, setSelectedGrupoCliente] = useState(null);
    const [selectedEspecificCategories, setSelectedEspecificCategories] = useState(null);
    const [basePrice, setBasePrice] = useState(1500);
    const [percentageDesconto, setPercentageDesconto] = useState(50);
    const [valueTextArea, setValueTextArea] = useState('');
    const [desconto, setDesconto] = useState('');
    const [descontoGrupo, setDescontoGrupo] = useState('');

    const gruposClientes = [
        'Sofas1',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];

    return (
        <Row className="flex flex-wrap flex-column">
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Preço base</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8}>
                    <div className="flex-auto">
                        <InputNumber className='basePrecoInput w-12' inputId="currency-us" value={basePrice} onValueChange={(e) => setBasePrice(e.value)} mode="currency" currency="BRL" locale="pt-BR" maxLength={18} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Tipo desconto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex flex-wrap gap-2">
                    <div className={`flex align-items-center radioStepPreco  ${desconto === 'SemDesconto' ? 'selecionado' : ''}`}>
                        <RadioButton inputId="Desconto1" name="pizza" value="SemDesconto" onChange={(e) => setDesconto(e.value)} checked={desconto === 'SemDesconto'} />
                        <label htmlFor="Desconto1" className="ml-2">Sem desconto</label>
                    </div>
                    <div className={`flex align-items-center radioStepPreco  ${desconto === 'Porcentagem' ? 'selecionado' : ''}`}>
                        <RadioButton inputId="Desconto2" name="pizza" value="Porcentagem" onChange={(e) => setDesconto(e.value)} checked={desconto === 'Porcentagem'} />
                        <label htmlFor="Desconto2" className="ml-2">Porcentagem %</label>
                    </div>
                    {desconto === 'Porcentagem' && (
                            <InputNumber className='basePrecoInput' inputId="percent" value={percentageDesconto} onValueChange={(e) => setPercentageDesconto(e.value)} prefix="%" maxLength={4} />
                    )}

                </Col>
            </Col>
            {desconto === 'Porcentagem' && (
                <Col className="flex flex-wrap align-items-center">
                    <Col lg={4} className="flex flex-column">
                        <h5>Grupo de clientes</h5>
                        <p>Breve descrição do produto</p>
                    </Col>
                    <Col lg={8} className="flex gap-2">
                        <div className={`flex align-items-center radioStepPreco ${descontoGrupo === 'Geral' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="pizza" value="Geral" onChange={(e) => setDescontoGrupo(e.value)} checked={descontoGrupo === 'Geral'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto Geral</label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco ${descontoGrupo === 'Especifico' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="pizza" value="Especifico" onChange={(e) => setDescontoGrupo(e.value)} checked={descontoGrupo === 'Especifico'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto Específico</label>
                        </div>
                        {descontoGrupo === 'Especifico' && (
                            <div className="flex align-items-center ">
                                <Dropdown
                                    value={selectedGrupoCliente}
                                    showClear
                                    onChange={(e) => setSelectedGrupoCliente(e.value)}
                                    options={gruposClientes}
                                    optionLabel="name"
                                    placeholder="Categoria geral"
                                    filter
                                    className="w-full " />
                            </div>
                        )}
                    </Col>
                </Col>
            )}

        </Row>
    )
}