import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";

import '../css/stepPreco.css';

export default function StepPreco() {
    const [selectedGrupoCliente, setSelectedGrupoCliente] = useState(null);
    const [selectedDiscountType, setSelectedDiscountType] = useState(null);
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

    const tiposDesconto = [
        'Ano novo',
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
                        <InputNumber className='basePrecoInput w-12' inputId="currency-us" value={basePrice} onValueChange={(e) => setBasePrice(e.value)} min={0}  mode="currency" currency="BRL" locale="pt-BR" maxLength={18} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-start">
                <Col lg={4} className="flex flex-column">
                    <h5>Desconto</h5>
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
                        <><div className="flex align-items-center w-12 gap-2 mb-3">
                            <InputNumber className='basePrecoInput w-12 ' inputId="percent" value={percentageDesconto} onValueChange={(e) => setPercentageDesconto(e.value)} prefix="% " min={0} max={100} maxLength={5} />

                            <Dropdown
                                value={selectedDiscountType}
                                showClear
                                onChange={(e) => setSelectedDiscountType(e.value)}
                                options={tiposDesconto}
                                optionLabel="name"
                                placeholder="Tipo de desconto"
                                filter
                                className="w-full " />
                        </div>
                        </>
                    )}

                </Col>
            </Col>
            {desconto === 'Porcentagem' && (
                <Col className="flex flex-wrap align-items-start">
                    <Col lg={4} className="flex flex-column">
                        <h5>Grupo de clientes</h5>
                        <p>Breve descrição do produto</p>
                    </Col>
                    <Col lg={8} className="flex flex-wrap gap-2">
                        <div className={`flex align-items-center radioStepPreco ${descontoGrupo === 'Geral' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="pizza" value="Geral" onChange={(e) => setDescontoGrupo(e.value)} checked={descontoGrupo === 'Geral'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto para todos os grupos</label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco ${descontoGrupo === 'Especifico' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="pizza" value="Especifico" onChange={(e) => setDescontoGrupo(e.value)} checked={descontoGrupo === 'Especifico'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto para um grupo específico</label>
                        </div>
                        {descontoGrupo === 'Especifico' && (
                            <div className="flex align-items-center w-12">
                                <Dropdown
                                    value={selectedGrupoCliente}
                                    showClear
                                    onChange={(e) => setSelectedGrupoCliente(e.value)}
                                    options={gruposClientes}
                                    optionLabel="name"
                                    placeholder="Grupos disponíveis"
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