import React from "react";
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import imgTeste from '../imagens/jardim2.avif';

import '../css/produtosCatalago.css';

export default function ProdutosCatalago({ itensFiltrados, categoria }) {
    const navigate = useNavigate();

    const handleProdutoUpdateClick = (produto) => {
        navigate(`/detalhesProduto/${produto.idProduto}`, { state: produto });
    };

    return (
        <div className="flex">
            {itensFiltrados.length > 0 ? (
                itensFiltrados.map((produto, index) => (
                    produto.geralCategoria === categoria ? (
                        <Col key={index} className="flex flex-column flex-wrap justify-content-center produtosCatalagoCorpo gap-2 relative">
                            <div className="flex align-items-center justify-content-between nomeProduto ">
                                <div className="flex flex-column align-items-start line-height-3">
                                    <h5 className="exclusive text-left mb-1" >{produto.nomeProduto}</h5>
                                    <p>R${(parseFloat(produto.precoBase).toFixed(2))}</p>
                                </div>
                                <div onClick={() => handleProdutoUpdateClick(produto)} >
                                    <i className="pi pi-arrow-up-right "></i>
                                </div>
                            </div>
                            {Array.isArray(produto.imgProduto) && produto.imgProduto.length > 0 && (
                                <img
                                    className="border-round-3xl"
                                    src={produto.imgProduto[0].imgCaminho ? `http://localhost:3002/${produto.imgProduto[0].imgCaminho}` : imgTeste}
                                    alt="Produto"
                                />
                            )}

                        </Col>
                    ) : (<></>)
                ))) : (
                <>
                    <p style={{ color: 'var(--oliveWoodLow)' }}> Nenhum produto encontrado.</p>
                </>)}
        </div>
    )
};
