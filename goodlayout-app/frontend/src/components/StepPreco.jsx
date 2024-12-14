import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from "primereact/radiobutton";

import '../css/stepPreco.css';

export default function StepPreco({ formData, handleChange }) {
        const [tiposDesconto, setTiposDesconto] = useState([]);
    
    const gruposClientes = [
        'Sofas1',
        'Sofas2',
        'Sofas3',
        'Sofas4',
    ];



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/tipos_desconto");

                const newProductId = data.map(item => item.nome_desconto);
                setTiposDesconto(newProductId);

                console.log('nome tipos_desconto: ', newProductId);
            } catch (error) {
                console.error("Erro ao buscar tipos de madeira:", error);
            }

            // try {
            //     const { data } = await axios.get("http://localhost:3002/subcategorias_moveis_externos");

            //     const newProductId = data.map(item => item.nome_subcategoria);
            //     setEspecificCategories(newProductId);
                
            //     console.log('nome subcategorias_moveis_externos: ', newProductId);
            // } catch (error) {
            //     console.error("Erro ao buscar tipos de revestimento:", error);
            // }
        };

        fetchData();
    }, []);

    return (
        <Row className="flex flex-wrap flex-column">
            <Col className="flex flex-wrap align-items-center">
                <Col lg={4} className="flex flex-column">
                    <h5>Preço base</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8}>
                    <div className="flex-auto">
                        <InputNumber className='basePrecoInput w-12' inputId="currency-us" name="precoBase" value={formData.precoBase} onValueChange={handleChange} min={0}  mode="currency" currency="BRL" locale="pt-BR" maxLength={18} />
                    </div>
                </Col>
            </Col>
            <Col className="flex flex-wrap align-items-start">
                <Col lg={4} className="flex flex-column">
                    <h5>Desconto</h5>
                    <p>descrição imagem</p>
                </Col>
                <Col lg={8} className="flex flex-wrap gap-2">
                    <div className={`flex align-items-center radioStepPreco  ${formData.desconto === 'SemDesconto' ? 'selecionado' : ''}`}>
                        <RadioButton inputId="Desconto1" name="desconto" value="SemDesconto" onChange={handleChange} checked={formData.desconto === 'SemDesconto' } />
                        <label htmlFor="Desconto1" className="ml-2">Sem desconto</label>
                    </div>
                    <div className={`flex align-items-center radioStepPreco  ${formData.desconto === 'Porcentagem' ? 'selecionado' : ''}`}>
                        <RadioButton inputId="Desconto2" name="desconto" value="Porcentagem" onChange={handleChange} checked={formData.desconto === 'Porcentagem' } />
                        <label htmlFor="Desconto2" className="ml-2">Porcentagem %</label>
                    </div>
                    {formData.desconto === 'Porcentagem' && (
                        <><div className="flex align-items-center w-12 gap-2 mb-3">
                            <InputNumber className='basePrecoInput w-12 ' inputId="percent" name="quantDesconto" value={formData.quantDesconto} onValueChange={handleChange} prefix="% " min={0} max={100} maxLength={5} />

                            <Dropdown
                        name="tipoDesconto" value={formData.tipoDesconto} onChange={handleChange}
                                showClear
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
            {formData.desconto === 'Porcentagem' && (
                <Col className="flex flex-wrap align-items-start">
                    <Col lg={4} className="flex flex-column">
                        <h5>Grupo de clientes</h5>
                        <p>Breve descrição do produto</p>
                    </Col>
                    <Col lg={8} className="flex flex-wrap gap-2">
                        <div className={`flex align-items-center radioStepPreco ${formData.grupoDesconto === 'GrupoGeral' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="grupoDesconto" value="GrupoGeral" onChange={handleChange} checked={formData.grupoDesconto === 'GrupoGeral'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto para todos os grupos</label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco ${formData.grupoDesconto === 'GrupoEspecifico' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto3" name="grupoDesconto" value="GrupoEspecifico" onChange={handleChange} checked={formData.grupoDesconto === 'GrupoEspecifico'} />
                            <label htmlFor="Desconto3" className="ml-2">Desconto para um grupo específico</label>
                        </div>
                        {formData.grupoDesconto === 'GrupoEspecifico' && (
                            <div className="flex align-items-center w-12">
                                <Dropdown
                                name="tipoGrupoDesconto" value={formData.tipoGrupoDesconto} onChange={handleChange}
                                    showClear
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