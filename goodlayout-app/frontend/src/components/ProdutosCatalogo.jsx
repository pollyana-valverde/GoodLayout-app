import React from "react";
import { Col } from 'react-bootstrap';
import imgTeste from '../imagens/jardim2.avif';

import '../css/tabContentMediumHome.css';

export default function ProdutosCatalago({ itensFiltrados, categoria }) {
    return (
        <div className="flex flex-wrap tabContentMediumHome">
            {itensFiltrados.length > 0 ? (
                itensFiltrados.map((produto, index) => (
                    produto.geralCategoria === categoria ? (
                        <Col key={index} className="flex flex-wrap justify-content-center">
                            <div className="relative ">
                                {Array.isArray(produto.imgProduto) && produto.imgProduto.length > 0 && (
                                    <img
                                        style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                                        className="border-round-2xl"
                                        src={produto.imgProduto[0].imgCaminho ? `http://localhost:3002${produto.imgProduto[0].imgCaminho}` : imgTeste}
                                        alt="Produto"
                                    />
                                )}
                                <div className="absolute top-0 right-0 m-2">
                                    <a href="/login">
                                        <i className="pi pi-arrow-up-right "></i>
                                    </a>
                                </div>
                                <h5 className="exclusive absolute bottom-0 m-2">{produto.nomeProduto}</h5>
                            </div>
                        </Col>
                    ) : (<></>)
                ))) : (
                <>
                    <p style={{ color: 'var(--oliveWoodLow)' }}> Nenhum produto encontrado.</p>
                </>)}
        </div>
    )
};
