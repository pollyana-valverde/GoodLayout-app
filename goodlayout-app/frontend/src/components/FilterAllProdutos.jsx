import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import { Row } from 'react-bootstrap';
import { RadioButton } from "primereact/radiobutton";

import '../css/filterAllProdutos.css';

export default function FilterAllProdutos({ onFilter, onClear }) {
    const [produtoStatus, setProdutoStatus] = useState('Todos');
    const [produtoEstoque, setProdutoEstoque] = useState('');
    const [geralCategoria, setGeralCategoria] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/categorias_moveis_externos");
                const categoriasList = data.map(item => item.nome_categoria);
                setCategorias(categoriasList);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        fetchData();
    }, []);

    const handleBuscar = () => {
        onFilter(produtoStatus, produtoEstoque, geralCategoria);
    };

    const handleLimpar = () => {
        setProdutoStatus('');
        setProdutoEstoque('');
        setGeralCategoria('');
        onClear();
    };

    return (
        <Row className="filterAllProdutos flex flex-column justify-content-center align-items-center ml-2">
            <div className="filterProduto_status flex flex-column gap-1 mb-2">
                    <p>Status do produto</p>
                    <div className="flex justify-content-between w-12 gap-2">
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoStatus === 'Todos' ? 'selecionado' : ''} `}>
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Todos"
                                name="produtoStatus"
                                value="Todos"
                                onChange={(e) => setProdutoStatus(e.value)}
                                checked={produtoStatus === 'Todos'} />
                            <label htmlFor="Todos" className="ml-2">Todos </label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoStatus === 'Ativos' ? 'selecionado' : ''}`}>
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Ativo"
                                name="produtoStatus"
                                value="Ativos"
                                onChange={(e) => setProdutoStatus(e.value)}
                                checked={produtoStatus === 'Ativos'} />
                            <label htmlFor="Ativo" className="ml-2">Ativo </label>
                        </div>
                    </div>
                    <div className="flex justify-content-between w-12 gap-2">
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoStatus === 'Inativo' ? 'selecionado' : ''} `}>
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Inativo"
                                name="produtoStatus"
                                value="Inativo"
                                onChange={(e) => setProdutoStatus(e.value)}
                                checked={produtoStatus === 'Inativo'} />
                            <label htmlFor="Inativo" className="ml-2">Inativo </label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoStatus === 'Rascunho' ? 'selecionado' : ''}`}>
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Rascunho"
                                name="produtoStatus"
                                value="Rascunho"
                                onChange={(e) => setProdutoStatus(e.value)}
                                checked={produtoStatus === 'Rascunho'} />
                            <label htmlFor="Rascunho" className="ml-2">Rascunho  </label>
                        </div>
                    </div>
                </div>
                <div className="filterProduto_estoque flex flex-column gap-1 mb-2">
                    <p>Alerta de estoque</p>
                    <div className="flex justify-content-between w-12 gap-2">
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoEstoque === 'Baixo_estoque' ? 'selecionado' : ''} `}>
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Baixo_estoque"
                                name="produtoEstoque"
                                value="Baixo_estoque"
                                onChange={(e) => setProdutoEstoque(e.value)}
                                checked={produtoEstoque === 'Baixo_estoque'} />
                            <label htmlFor="Baixo_estoque" className="ml-2">Baixo </label>
                        </div>
                        <div className={`flex align-items-center radioStepPreco p-2 w-6 ${produtoEstoque === 'Limite_estoque' ? 'selecionado' : ''}`} >
                            <RadioButton
                                className="radioFilterAllProdutos"
                                inputId="Limite_estoque"
                                name="produtoEstoque"
                                value="Limite_estoque"
                                onChange={(e) => setProdutoEstoque(e.value)}
                                checked={produtoEstoque === 'Limite_estoque'} />
                            <label htmlFor="Limite_estoque" className="ml-2">No limite  </label>
                        </div>
                    </div>
                </div>

            <div className="filterProduto_categoria flex flex-column gap-1 mb-2">
                <p>Categoria</p>
                <Dropdown
                    name="geralCategoria"
                    value={geralCategoria}
                    onChange={(e) => setGeralCategoria(e.value)}
                    options={categorias}
                    placeholder="Categoria geral"
                    filter
                    className="w-full"
                />
            </div>
            <div className="filter_buttons mt-2 flex w-12 gap-2">
                <button className="btn_buscar w-6" onClick={handleBuscar}>
                    Buscar
                </button>
                <button className=" w-6" onClick={handleLimpar}>
                    Limpar
                </button>
            </div>
        </Row>
    );
}
