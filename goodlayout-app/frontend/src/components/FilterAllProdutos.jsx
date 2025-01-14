import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { RadioButton } from "primereact/radiobutton";

import '../css/filterAllProdutos.css';

export default function FilterAllProdutos() {
    const [produtoStatus, setProdutoStatus] = useState('')
    const [allProdutos, setAllProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/produtos");
                const dataOrdenada = data.reverse();

                setAllProdutos(dataOrdenada);

                console.log('todos os produtos:', dataOrdenada)

            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Row className="filterAllProdutos flex flex-column justify-content-center align-items-center ml-2">
                <div className="filterProduto_status">
                    <p>Status do produto</p>
                    <div className="flex">
                        <div className={`flex align-items-center radioStepPreco  ${produtoStatus === 'Todos' ? 'selecionado' : ''} `}>
                            <RadioButton inputId="Desconto1" name="produtoStatus" value="Todos" onChange={(e) => setProdutoStatus(e.value)} checked={produtoStatus === 'Todos'} />
                            <label htmlFor="Desconto1" className="ml-2">Todos <span>{allProdutos.length}</span></label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco  ${produtoStatus === 'Ativos' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto2" name="produtoStatus" value="Ativos" onChange={(e) => setProdutoStatus(e.value)} checked={produtoStatus === 'Ativos'} />
                            <label htmlFor="Desconto2" className="ml-2">Ativo <span>{}</span></label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className={`flex align-items-center radioStepPreco  ${produtoStatus === 'Inativo' ? 'selecionado' : ''} `}>
                            <RadioButton inputId="Desconto1" name="produtoStatus" value="Inativo" onChange={(e) => setProdutoStatus(e.value)} checked={produtoStatus === 'Inativo'} />
                            <label htmlFor="Desconto1" className="ml-2">Inativo <span>0</span></label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco  ${produtoStatus === 'Rascunho' ? 'selecionado' : ''}`}>
                            <RadioButton inputId="Desconto2" name="produtoStatus" value="Rascunho" onChange={(e) => setProdutoStatus(e.value)} checked={produtoStatus === 'Rascunho'} />
                            <label htmlFor="Desconto2" className="ml-2">Rascunho <span>0</span> </label>
                        </div>
                    </div>
                </div>
                <div className="filterProduto_estoque">
                    <p>Alerta de estoque</p>
                </div>
                <div className="filterProduto_categoria">
                    <p>Categoria</p>
                </div>
            </Row>
        </>
    )

}