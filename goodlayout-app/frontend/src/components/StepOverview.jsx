import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import '../css/stepOverview.css';

export default function StepOverview() {
    const [selectedGeralCategories, setSelectedGeralCategories] = useState(null);
    const [selectedEspecificCategories, setSelectedEspecificCategories] = useState(null);
    const [valueInput, setValueInput] = useState('');
    const [valueTextArea, setValueTextArea] = useState('');
    const inputFileRef = useRef(null);
    const [images, setImages] = useState([]);

    const geralCategories = [
        'Sofas'
    ];

    const especificCategories = [
        'Madeira'
    ];

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 6) {
            alert('Você pode selecionar no máximo 6 imagens.');
            return;
        }

        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...newImages]);
    };

    // Função para remover uma imagem
    const removeImage = (index) => {
        setImages((prev) => {
            const updatedImages = [...prev];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    const handleClickInputFile = () => {
        inputFileRef.current.click();
    };

    return (
        <Row className="flex flex-wrap flex-column">
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Imagens do produto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex gap-2 ">
                    <div className="flex flex-nowrap gap-2 ">
                        {images.map((image, index) => (
                            <div key={index} className="relative imagePreviewOverview">
                                <img
                                    src={image.preview}
                                    alt={`Preview ${index}`}
                                />
                                <i className="pi pi-times removeImageOverview" onClick={() => removeImage(index)}></i>
                            </div>
                        ))}
                    </div>
                    <div className="flex align-items-center w-12 " >
                        <input
                            type="file"
                            ref={inputFileRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            disabled={images.length >= 6}
                        />
                        {images.length != 6 ? (
                            <>
                                <div onClick={handleClickInputFile} className="flex w-12 gap-2 align-items-center justify-content-center addImageOverview">
                                    <i className="pi pi-plus text-sm"></i>
                                    <p style={{ margin: 'unset' }}> adicionar mais ({6 - images.length})</p>
                                </div>
                            </>
                        ) : (<></>)}
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Nome do produto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8}>
                    <InputText className="w-12 nomeInputProdutoOverview" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Categorias do produto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex gap-2">
                    <Dropdown
                        value={selectedGeralCategories}
                        showClear
                        onChange={(e) => setSelectedGeralCategories(e.value)}
                        options={geralCategories}
                        optionLabel="name"
                        placeholder="Select a Country"
                        filter className="w-full " />
                    <Dropdown
                        value={selectedEspecificCategories}
                        showClear
                        onChange={(e) => setSelectedEspecificCategories(e.value)}
                        options={especificCategories}
                        optionLabel="name"
                        placeholder="Select a Country"
                        filter className="w-full " />
                </Col>
            </Col>
            <Col className="flex flex-wrap">
                <Col lg={4} className="flex flex-column">
                    <h5>Descrição do produto</h5>
                    <p>Breve descrição do produto</p>
                </Col>
                <Col lg={8}>
                    <InputTextarea className="w-12" value={valueTextArea} onChange={(e) => setValueTextArea(e.target.value)} rows={3} />
                </Col>
            </Col>
        </Row>
    )
}