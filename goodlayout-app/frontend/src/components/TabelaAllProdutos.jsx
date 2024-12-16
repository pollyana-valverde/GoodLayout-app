import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';

import imgTeste from '../imagens/jardim2.avif';

import '../css/allProdutos.css';

export default function TabelaAllProdutos() {
    const [allProdutos, setAllProdutos] = useState([]);
    const [showNotificationAction, setShowNotificationAction] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/produtoCorImg");
                const dataOrdenada = data.reverse();

                setAllProdutos(dataOrdenada);

                console.log('todos os produtos:', dataOrdenada)

            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchData();
    }, []);


    const toggleNotificationAction = (index) => {
        setShowNotificationAction((prevState) => (prevState === index ? null : index));
    }

    return (
        <Row>
            <div className="flex flex-column align-item-center">
                {allProdutos.map((produto, index) => (
                    <Col key={index} className="flex align-items-center gap-2 cardAllProdutos w-9 p-2 border-round-xl mx-2 my-1">
                        {Array.isArray(produto.imgProduto) && produto.imgProduto.length > 0 && (
                            <img
                                style={{ objectFit: 'cover' }}
                                className="border-round-xl"
                                src={produto.imgProduto[0].imgCaminho ? `http://localhost:3002${produto.imgProduto[0].imgCaminho}` : imgTeste}
                                alt="Produto"
                                width={60}
                                height={60}
                            />
                        )}

                        <div className="flex gap-5  w-12 align-items-center justify-content-between">
                            <div className="flex flex-column">
                                <h5 style={{ margin: 'unset' }}>{produto.nomeProduto}</h5>
                                <div className="flex gap-3">
                                    {Array.isArray(produto.coresProduto) && (
                                        <p style={{ margin: 'unset', backgroundColor:'var(--oliveWoodSuperLow)',borderRadius:'6px', padding:'0px 5px' }}>
                                            {produto.coresProduto.length >= 2 && (<span>{produto.coresProduto.length} variantes</span>)
                                                || produto.coresProduto.length === 1 && (<span>{produto.coresProduto.length} variante</span>)
                                                || produto.coresProduto.length === 0 && (<></>)
                                            }
                                        </p>
                                    )}
                                    <p style={{ margin: 'unset' }}>{produto.geralCategoria}</p>
                                    <p style={{ margin: 'unset' }}>Estoque:
                                        <span style={{ color: 'var(--oliveWood)' }}> {produto.estoque} {produto.estoque === '1' ? (<span>produto</span>) : (<span>produtos</span>)}</span>
                                        {produto.estoque <= 50 && (<span style={{ color: 'rgb(207, 15, 57)' }}> <i className="fa-solid fa-temperature-quarter"></i> baixo</span>) || produto.estoque > '50' && (<></>)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 align-items-center">
                                <div className="flex flex-column">
                                    <p style={{ margin: 'unset' }}>Preço</p>
                                    <h5 style={{ margin: 'unset' }}>R$ {produto.precoBase}</h5>
                                </div>
                                <div className="cardAllProdutosActions flex p-2 border-round-md align-items-center">
                                    <i className={showNotificationAction === index ? 'pi pi-ellipsis-v mr-1' : 'pi pi-ellipsis-h'} style={{ cursor: 'pointer' }} onClick={() => toggleNotificationAction(index)}></i>
                                    {showNotificationAction === index && (
                                        <div className="notificationConfig-actions">
                                            <p style={{ margin: 'unset' }}>Editar</p>
                                            <p style={{ margin: 'unset' }}>Excluir</p>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}

            </div>
        </Row>
    )

}