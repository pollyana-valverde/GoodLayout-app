

import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import "../../css/addProduto.css"; // Inclua os estilos necessários
import { Container, Row, Col } from 'react-bootstrap';

import StepConfirmacoes from "../../components/StepConfirmacoes";
import StepDescricoes from "../../components/StepDescricoes";
import StepOverview from "../../components/StepOverview";
import StepPreco from "../../components/StepPreco";

export default function AddProduto() {
    const stepperRef = useRef(null);

    return (
        <Container >
            <Row className="flex justify-content-center w-12 mt-4">
                <Col lg={12}>
                    <h5>Adicionar novo produto</h5>
                    <Stepper ref={stepperRef}>
                        <StepperPanel header="Overview">
                            <div className="flex flex-column">
                                <StepOverview />
                            </div>
                            <div className="flex pt-2 justify-content-end ">
                                <Button
                                    style={{
                                        backgroundColor: 'var(--oliveWoodLow)',
                                        color: 'var(--white)',
                                        borderRadius: '20px',
                                        borderColor: 'var(--oliveWoodLow)'
                                    }}
                                    label="Next"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Descrições">
                            <div className="flex flex-column">
                                <StepDescricoes />
                            </div>
                            <div className="flex pt-2 justify-content-between">
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--oliveWoodLow)',
                                        borderRadius: '20px',
                                        border: '2px solid var(--oliveWoodLow)'
                                    }}
                                    label="Back"
                                    severity="secondary"
                                    icon="pi pi-arrow-left"
                                    onClick={() => stepperRef.current.prevCallback()} />

                                <Button
                                    style={{
                                        backgroundColor: 'var(--oliveWoodLow)',
                                        color: 'var(--white)',
                                        borderRadius: '20px',
                                        borderColor: 'var(--oliveWoodLow)'
                                    }}
                                    label="Next"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Preço">
                            <div className="flex flex-column">
                                <StepPreco />
                            </div>
                            <div className="flex pt-2 justify-content-between">
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--oliveWoodLow)',
                                        borderRadius: '20px',
                                        border: '2px solid var(--oliveWoodLow)'
                                    }}
                                    label="Back"
                                    severity="secondary"
                                    icon="pi pi-arrow-left"
                                    onClick={() => stepperRef.current.prevCallback()} />

                                <Button
                                    style={{
                                        backgroundColor: 'var(--oliveWoodLow)',
                                        color: 'var(--white)',
                                        borderRadius: '20px',
                                        borderColor: 'var(--oliveWoodLow)'
                                    }}
                                    label="Next"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Confirmações">
                            <div className="flex flex-column">
                                <StepConfirmacoes />
                            </div>
                            <div className="flex pt-2 justify-content-start">
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--oliveWoodLow)',
                                        borderRadius: '20px',
                                        border: '2px solid var(--oliveWoodLow)'
                                    }}
                                    label="Back"
                                    severity="secondary"
                                    icon="pi pi-arrow-left"
                                    onClick={() => stepperRef.current.prevCallback()} />
                            </div>
                        </StepperPanel>

                    </Stepper>
                </Col>
            </Row>
        </Container>
    )
}
