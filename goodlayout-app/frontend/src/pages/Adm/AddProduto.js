

import React, { useRef, useState } from "react";
import axios from "axios";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import "../../css/addProduto.css"; // Inclua os estilos necessários
import { Container, Row, Col } from 'react-bootstrap';
import { Toast } from 'primereact/toast';

import StepConfirmacoes from "../../components/StepConfirmacoes";
import StepDescricoes from "../../components/StepDescricoes";
import StepOverview from "../../components/StepOverview";
import StepPreco from "../../components/StepPreco";

export default function AddProduto() {
    const toast = useRef(null);
    const stepperRef = useRef(null);
    const [formData, setFormData] = useState({
        nomeProduto: '',
        descProduto: '',
        geralCategoria: null,
        subCategoria: null,
        peso: 0,
        altura: 0,
        largura: 0,
        profundidade: 0,
        estoque: 0,
        madeira: null,
        revestimento: null,
        ferragem: null,
        acabamento: null,
        vidro: null,
        precoBase: 0,
        desconto: '',
        quantDesconto: 0,
        tipoDesconto: null,
        grupoDesconto: null,
        publicacao: '',
        rascunho: false,
        dataPublicacao: '',
        timePublicacao: '',
    });

    const [formDataCor, setFormDataCor] = useState({
        nomeCor: '',
        produto_id: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleEditorChange = (e) => {
    //     const {  value } = e.htmlValue;
    //     setFormData({
    //         descProduto: value
    //     });
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/produtos', formData);

            const newProductId = response.data.id;

            console.log('novo produto criado id: ', newProductId);


            if (!response) {
                const corProdutoResponse = await axios.post('http://localhost:3002/coresProduto', {
                    ...formDataCor,
                    nomeCor: formDataCor.nomeCor,
                    produto_id: newProductId
                });
                console.log('nova cor de produto criada id: ', corProdutoResponse);
            }

            toast.current.show({
                severity: 'success',
                summary: 'Inscrição concluída com sucesso!',
                life: 3000
            });
            setFormData({
                nomeProduto: '',
                descProduto: '',
                geralCategoria: null,
                subCategoria: null,
                peso: 0,
                altura: 0,
                largura: 0,
                profundidade: 0,
                estoque: 0,
                madeira: null,
                revestimento: null,
                ferragem: null,
                acabamento: null,
                vidro: null,
                precoBase: 0,
                desconto: '',
                quantDesconto: 0,
                tipoDesconto: null,
                grupoDesconto: null,
                publicacao: '',
                rascunho: false,
                dataPublicacao: '',
                timePublicacao: '',
            });

            setFormDataCor({
                nomeCor: '',
                produto_id: ''
            })

        } catch (error) {

            console.error('Erro ao publicar produto:', error);
            if (!formData) {
                toast.current.show({
                    severity: 'error',
                    summary: 'Erro ao publicar produto',
                    life: 3000
                });
            }
        }
    };

    return (
        <Container >
            <Toast ref={toast} />
            <form onSubmit={handleSubmit}>
                <Row className="flex justify-content-center w-12 mt-4">
                    <Col lg={12}>
                        <h5 className="text-sm" style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }}>Produtos / <span className="font-semibold">Adicionar o produto</span></h5>
                        <Stepper ref={stepperRef}>
                            <StepperPanel header="Overview">
                                <div className="flex flex-column">
                                    <StepOverview formData={formData} handleChange={handleChange} />
                                </div>
                                <div className="flex pt-2 justify-content-end ">
                                    <Button className="btnStepNext"
                                        label="Próximo"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        onClick={() => stepperRef.current.nextCallback()} />
                                </div>
                            </StepperPanel>
                            <StepperPanel header="Descrições">
                                <div className="flex flex-column">
                                    <StepDescricoes formData={formData} handleChange={handleChange} formDataCor={formDataCor} setFormDataCor={setFormDataCor} />
                                </div>
                                <div className="flex pt-2 justify-content-end gap-2">
                                    <Button className="btnStepPrev"
                                        label="Voltar"
                                        severity="secondary"
                                        icon="pi pi-arrow-left"
                                        onClick={() => stepperRef.current.prevCallback()} />

                                    <Button className="btnStepNext"
                                        label="Próximo"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        onClick={() => stepperRef.current.nextCallback()} />
                                </div>
                            </StepperPanel>
                            <StepperPanel header="Preço">
                                <div className="flex flex-column">
                                    <StepPreco formData={formData} handleChange={handleChange} />
                                </div>
                                <div className="flex pt-2 justify-content-end gap-2">
                                    <Button className="btnStepPrev"
                                        label="Voltar"
                                        severity="secondary"
                                        icon="pi pi-arrow-left"
                                        onClick={() => stepperRef.current.prevCallback()} />

                                    <Button className="btnStepNext"
                                        label="Próximo"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        onClick={() => stepperRef.current.nextCallback()} />
                                </div>
                            </StepperPanel>
                            <StepperPanel header="Confirmações">
                                <div className="flex flex-column">
                                    <StepConfirmacoes formData={formData} handleChange={handleChange} />
                                </div>
                                <div className="flex pt-2 justify-content-end gap-2">
                                    <Button className="btnStepPrev"
                                        label="Voltar"
                                        severity="secondary"
                                        icon="pi pi-arrow-left"
                                        onClick={() => stepperRef.current.prevCallback()} />
                                    <Button type="submit" className="btnStepNext"
                                        label="Concluir"
                                        icon="pi pi-check"
                                        iconPos="right"
                                    />
                                </div>
                            </StepperPanel>

                        </Stepper>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}
