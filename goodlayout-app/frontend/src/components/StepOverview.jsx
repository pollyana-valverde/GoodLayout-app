import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "primereact/editor";
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import '../css/stepOverview.css';

export default function StepOverview({ formData,setFormData, handleChange }) {
    const inputFileRef = useRef(null);
    const [geralCategories, setGeralCategories] = useState([]);
    const [especificCategories, setEspecificCategories] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/categorias_moveis_externos");

                const newProductId = data.map(item => item.nome_categoria);
                setGeralCategories(newProductId);

                console.log('nome categorias_moveis_externos: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }

            try {
                const { data } = await axios.get("http://localhost:3002/subcategorias_moveis_externos");

                const newProductId = data.map(item => item.nome_subcategoria);
                setEspecificCategories(newProductId);
                
                console.log('nome subcategorias_moveis_externos: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de revestimento:", error);
            }
        };

        fetchData();
    }, []);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
    
        // Limitar o número de imagens a 6
        if (files.length + formData.imgsProduto.length > 6) {
            alert('Você pode selecionar no máximo 6 imagens.');
            return;
        }
    
        // Criar objetos com preview
        const newImages = files.map((file) => ({
            preview: URL.createObjectURL(file), // Preview gerado pelo navegador
            file, // Adicionado caso precise salvar no banco mais tarde
        }));
    
        // Atualizar o estado
        setFormData((prevData) => ({
            ...prevData,
            imgsProduto: [...prevData.imgsProduto, ...newImages],
        }));
    };
    

    // Função para remover uma imagem
    const removeImage = (index) => {
        setFormData((prevData) => {
            const updatedImgs = [...prevData.imgsProduto];
            const removedImage = updatedImgs.splice(index, 1)[0];
    
            // Liberar URL gerada
            if (removedImage.preview) {
                URL.revokeObjectURL(removedImage.preview);
            }
    
            return { ...prevData, imgsProduto: updatedImgs };
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
                <Col lg={8} className={`flex flex-nowrap  ${formData.imgsProduto.length === 0 ? 'gap-0' : 'gap-2'}`}>
                    <div className='flex flex-nowrap gap-2 '>
                        {formData.imgsProduto.map((image, index) => (
                            <div key={index} className="relative imagePreviewOverview">
                                <img
                                    src={image.preview || `http://localhost:3002/${image.imgCaminho}`}
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
                            disabled={formData.imgsProduto.length >= 6}
                        />
                        {formData.imgsProduto.length != 6 ? (
                            <>
                                <div onClick={handleClickInputFile} className="flex w-12 gap-2 align-items-center justify-content-center addImageOverview">
                                    <i className="pi pi-plus text-sm"></i>
                                    <p style={{ margin: 'unset' }}> adicionar ({6 - formData.imgsProduto.length})</p>
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
                    <InputText className="w-12 nomeInputProdutoOverview" name="nomeProduto" value={formData.nomeProduto} onChange={handleChange} />
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Categorias do produto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex gap-2">
                    <Dropdown
                        name="geralCategoria" value={formData.geralCategoria} onChange={handleChange}
                        showClear
                        options={geralCategories}
                        optionLabel="name"
                        placeholder="Categoria geral"
                        filter className="w-full " />
                    <Dropdown
                        name="subCategoria" value={formData.subCategoria} onChange={handleChange}
                        showClear
                        options={especificCategories}
                        optionLabel="name"
                        placeholder="Subcategoria"
                        filter className="w-full " />
                </Col>
            </Col>
            <Col className="flex flex-wrap">
                <Col lg={4} className="flex flex-column">
                    <h5>Descrição do produto</h5>
                    <p>Breve descrição do produto</p>
                </Col>
                <Col lg={8}>
                    {/* <Editor value={formData.descProduto} name="descProduto" onChange={handleEditorChange} style={{ height: '150px' }} /> */}
                    <InputTextarea className="w-12 descInputProdutoOverview" value={formData.descProduto} name="descProduto" onChange={handleChange} rows={6} />
                </Col>
            </Col>
        </Row>
    )
}