
import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputSwitch } from "primereact/inputswitch";
import { Calendar } from 'primereact/calendar';

import '../css/stepPreco.css';

export default function StepConfirmacoes() {
    const [selectedGrupoCliente, setSelectedGrupoCliente] = useState(null);
    const [selectedDiscountType, setSelectedDiscountType] = useState(null);
    const [basePrice, setBasePrice] = useState(1500);
    const [checked, setChecked] = useState(false);
    const [percentageDesconto, setPercentageDesconto] = useState(50);
    const [valueTextArea, setValueTextArea] = useState('');
    const [desconto, setDesconto] = useState('');
    const [descontoGrupo, setDescontoGrupo] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

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
            <Col className="flex flex-wrap align-items-start gap-4">
                <div className="flex flex-column">
                    <h5 style={{ margin: 'unset',  }}>Salvar como racunho</h5>
                    <p>descrição imagem</p>
                </div>
                <InputSwitch className="mt-2" checked={checked} onChange={(e) => setChecked(e.value)} />
            </Col>
            <Col className="flex flex-wrap align-items-start">
                <Col lg={4} className="flex flex-column">
                    <h5 style={{color: checked === true ? 'var(--oliveWoodSuperLow)' : ''}}>Status de publicação</h5>
                    <p style={{color: checked === true ? 'var(--oliveWoodSuperLow)' : ''}}>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex gap-2">
                    {checked === true ? (
                        <>
                            <div className={`flex align-items-center radioStepPreco  ${desconto === 'SemDesconto' ? 'selecionado' : ''} ${checked === true ? 'desabilitado' : ''}`}>
                                <RadioButton inputId="Desconto1" name="pizza" value="SemDesconto" onChange={(e) => setDesconto(e.value)} checked={checked === true ? desconto === '' : desconto === 'SemDesconto'} disabled/>
                                <label htmlFor="Desconto1" className="ml-2">Publicado</label>
                            </div>
                            <div className={`flex align-items-center radioStepPreco  ${desconto === 'Porcentagem' ? 'selecionado' : ''} ${checked === true ? 'desabilitado' : ''}`}>
                                <RadioButton inputId="Desconto2" name="pizza" value="Porcentagem" onChange={(e) => setDesconto(e.value)} checked={checked === true ? desconto === '' : desconto === 'Porcentagem'} disabled/>
                                <label htmlFor="Desconto2" className="ml-2">Agendado</label>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className={`flex align-items-center radioStepPreco   ${desconto === 'SemDesconto' ? 'selecionado' : ''} `}>
                                <RadioButton inputId="Desconto1" name="pizza" value="SemDesconto" onChange={(e) => setDesconto(e.value)} checked={desconto === 'SemDesconto'} />
                                <label htmlFor="Desconto1" className="ml-2">Publicado</label>
                            </div>
                            <div className={`flex align-items-center radioStepPreco  ${desconto === 'Porcentagem' ? 'selecionado' : ''}`}>
                                <RadioButton inputId="Desconto2" name="pizza" value="Porcentagem" onChange={(e) => setDesconto(e.value)} checked={desconto === 'Porcentagem'} />
                                <label htmlFor="Desconto2" className="ml-2">Agendado</label>
                            </div>
                            {desconto === 'Porcentagem' && (
                                <>
                                    <div className="flex flex-auto align-items-center dimemsoesStepDescricoes gap-2  ">
                                        <Calendar value={date} onChange={(e) => setDate(e.value)} className="w-12" dateFormat="dd/mm/yy" showButtonBar />
                                        {date && (<Calendar id="calendar-timeonly" value={time} className="w-12" onChange={(e) => setTime(e.value)} timeOnly />)}
                                    </div>
                                </>
                            )}

                        </>
                    )}
                </Col>
            </Col>
            <Col>
            <h5>Confira todas as informações antes de publicar ou agendar.</h5>
            </Col>
        </Row>
    )
}