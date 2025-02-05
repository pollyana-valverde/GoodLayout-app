
import React from "react";
import { Row, Col } from 'react-bootstrap';
import { RadioButton } from "primereact/radiobutton";
import { useLocation } from 'react-router-dom';
import { InputSwitch } from "primereact/inputswitch";
import { Calendar } from 'primereact/calendar';

import '../css/stepPreco.css';

export default function StepConfirmacoes({ formData, handleChange }) {
    const location = useLocation();
    const { publicacao, rascunho, dataPublicacao, timePublicacao } = location.state || {};

    return (
        <Row className="flex flex-wrap flex-column">
            <Col className="flex flex-wrap align-items-start gap-4">
                <div className="flex flex-column">
                    <h5 style={{ margin: 'unset', }}>Salvar como racunho</h5>
                    <p>descrição imagem</p>
                </div>
                <InputSwitch className="mt-2" name="rascunho" checked={formData.rascunho || rascunho} onChange={handleChange} />
            </Col>
            <Col className="flex flex-wrap align-items-start">
                <Col lg={4} className="flex flex-column">
                    <h5 style={{ color: formData.rascunho === true || rascunho === true ? 'var(--oliveWoodSuperLow)' : '' }}>Status de publicação</h5>
                    <p style={{ color: formData.rascunho === true || rascunho === true ? 'var(--oliveWoodSuperLow)' : '' }}>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex gap-2">
                    {formData.rascunho === true || rascunho === true ? (
                        <>
                            <div className={`flex align-items-center radioStepPreco  ${formData.publicacao === 'Publicado' ? 'selecionado' : ''} ${formData.rascunho === true ? 'desabilitado' : ''}`}>
                                <RadioButton inputId="Desconto1" name="publicacao" value="Publicado" onChange={handleChange} checked={formData.rascunho === true ? formData.publicacao === '' : formData.publicacao === 'Publicado'} disabled />
                                <label htmlFor="Desconto1" className="ml-2">Publicado</label>
                            </div>
                            <div className={`flex align-items-center radioStepPreco  ${formData.publicacao === 'Agendado' ? 'selecionado' : ''} ${formData.rascunho === true ? 'desabilitado' : ''}`}>
                                <RadioButton inputId="Desconto2" name="publicacao" value="Agendado" onChange={handleChange} checked={formData.rascunho === true ? formData.publicacao === '' : formData.publicacao === 'Agendado'} disabled />
                                <label htmlFor="Desconto2" className="ml-2">Agendado</label>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className={`flex align-items-center radioStepPreco ${formData.publicacao === 'Publicado' ? 'selecionado' : ''} ${publicacao === 'Publicado' ? 'selecionado' : ''}`}>
                                <RadioButton inputId="Desconto1" name="publicacao" value="Publicado" onChange={handleChange} checked={formData.publicacao === 'Publicado' || publicacao === 'Publicado'} />
                                <label htmlFor="Desconto1" className="ml-2">Publicado</label>
                            </div>
                            <div className={`flex align-items-center radioStepPreco  ${formData.publicacao === 'Agendado' ? 'selecionado' : ''} ${publicacao === 'Agendado' ? 'selecionado' : ''}`}>
                                <RadioButton inputId="Desconto2" name="publicacao" value="Agendado" onChange={handleChange} checked={formData.publicacao === 'Agendado' || publicacao === 'Agendado'} />
                                <label htmlFor="Desconto2" className="ml-2">Agendado</label>
                            </div>
                            {formData.publicacao === 'Agendado' && (
                                <>
                                    <div className="flex flex-auto align-items-center dimemsoesStepDescricoes gap-2  ">
                                        <Calendar value={formData.dataPublicacao} onChange={handleChange} className="w-12" dateFormat="dd/mm/yy" name="dataPublicacao" showButtonBar />
                                        {formData.dataPublicacao && (<Calendar id="calendar-timeonly" value={formData.timePublicacao } name="timePublicacao" className="w-12" onChange={handleChange} timeOnly />)}
                                    </div>
                                </>
                            )}

                            {publicacao === 'Agendado' && (
                                <>
                                    <div className="flex flex-auto align-items-center dimemsoesStepDescricoes gap-2  ">
                                        <Calendar value={ dataPublicacao} onChange={handleChange} className="w-12" dateFormat="dd/mm/yy" name="dataPublicacao" showButtonBar />
                                        {dataPublicacao && (<Calendar id="calendar-timeonly" value={timePublicacao} name="timePublicacao" className="w-12" onChange={handleChange} timeOnly />)}
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