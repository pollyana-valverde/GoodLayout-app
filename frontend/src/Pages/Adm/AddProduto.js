

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
        coresProduto: [],
        imgsProduto: [],
    });

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

            const newProductId = response.data.idProduto;

            console.log('novo produto criado id: ', newProductId);

            for (const corProduto of formData.coresProduto) {
                const corProdutoResponse = await axios.post('http://localhost:3002/coresProduto', {
                    nomeCor: corProduto.nomeCor,
                });

                const coresProdutoId = corProdutoResponse.data.idCoresProduto;

                for (const imgProduto of formData.imgsProduto) {
                    const formDataImg = new FormData();
                    formDataImg.append('image', imgProduto.file); // Adiciona o arquivo original

                    const imgProdutoResponse = await axios.post('http://localhost:3002/imgProduto', formDataImg, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    const imgsProdutoId = imgProdutoResponse.data.idImgProduto;

                    await axios.post('http://localhost:3002/produtoCorImg', {
                        produto_id: newProductId,
                        cores_id: coresProdutoId,
                        Img_id: imgsProdutoId
                    });
                }
            }

            toast.current.show({
                severity: 'success',
                summary: 'Produto adicionado com sucesso!',
                life: 3000
            });

            setTimeout(() => {
                window.location.reload(false);
            }, 200);

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
                coresProduto: [],
                imgsProduto: []
            });

            // setTimeout(() => {
            //     window.location.reload(false);
            //   }, 1000);


        } catch (error) {

            console.error('Erro ao publicar produto:', error);
            if (formData) {
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
                        <h5 className="text-sm" style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }}><a href='/AllProdutos' style={{ color: 'var(--oliveWoodLow)' }}>Todos os produtos</a> / <span className="font-semibold">Adicionar o produto</span></h5>
                        <Stepper ref={stepperRef}>
                            <StepperPanel header="Overview">
                                <div className="flex flex-column">
                                    <StepOverview formData={formData} handleChange={handleChange} setFormData={setFormData} />
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
                                    <StepDescricoes formData={formData} handleChange={handleChange} setFormData={setFormData} />
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
