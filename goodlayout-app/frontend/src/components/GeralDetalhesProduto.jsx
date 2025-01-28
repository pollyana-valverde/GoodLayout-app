import React, { useState } from "react";
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import imgTeste from '../imagens/jardim2.avif';
import { Rating } from "primereact/rating";

import '../css/geralDetalhesProduto.css';

export default function GeralDetalhesProduto() {
    const location = useLocation();
    const { nomeProduto, precoBase, coresProduto, geralCategoria, subCategoria, descProduto, imgProduto, idProduto } = location.state || {};
    const [corGet, setCorGet] = useState(coresProduto[0].nomeCor);

    const handleGetColor = (color) => {
        setCorGet(color);
        console.log('nome da cor', color);
    }


    return (
        <div className="flex" key={idProduto}>
            <Col lg={5}>
                {Array.isArray(imgProduto) && imgProduto.length > 0 && (
                    <img
                        className="border-round-3xl"
                        src={imgProduto[0].imgCaminho ? `http://localhost:3002${imgProduto[0].imgCaminho}` : imgTeste}
                        alt="Produto"
                        style={{ width: '88%' }}
                        height={600}
                    />
                )}
            </Col>
            <Col lg={7} className="flex flex-column gap-3 justify-content-center geralDetalhesProduto_content">
                <h1 style={{ margin: 'unset' }}>{nomeProduto}</h1>
                <p className="descProduto" style={{ margin: 'unset' }}>
                    {descProduto}
                </p>
                <div className="flex gap-2">
                    <Rating value={4} readOnly cancel={false} />
                    <p style={{ margin: 'unset' }}> (quant. avaliação)</p>
                </div>
                <h5 style={{ margin: 'unset' }}>R${precoBase}</h5>
                <div className="flex flex-column gap-2">
                    <p className="coresTitle" style={{ margin: 'unset' }}>Cores disponíveis</p>
                    <div className="flex gap-2">
                        {coresProduto?.map((color, index) => (
                            <div className={`border-circle ${corGet === color.nomeCor ? 'corSelecionada' : 'corNAOSelecionada'}`}>
                                <div className='border-circle'
                                    onClick={() => handleGetColor(color.nomeCor)}
                                    key={index}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        backgroundColor: color.nomeCor,
                                    }}
                                >
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-12 geralDetalhesProduto_actions flex gap-2 mt-4">
                    <a className="w-6" href="/pagamento">
                        <button className="buyNow w-12" type="button">Comprar agora</button>
                    </a>
                    <button className="w-6" type="button">Adicionar no carrinho</button>
                </div>
            </Col>
        </div>
    )
}