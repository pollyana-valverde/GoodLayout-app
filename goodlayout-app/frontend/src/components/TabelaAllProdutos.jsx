import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import axios from "axios";
import { Row, Col } from 'react-bootstrap';

import imgTeste from '../imagens/jardim2.avif';

import '../css/allProdutos.css';

export default function TabelaAllProdutos({itensFiltrados, setItensFiltrados}) {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [showActionProdutos, setShowActionProdutos] = useState(false)

    const toggleProdutoAction = (index) => {
        setShowActionProdutos((prevState) => (prevState === index ? null : index));
    }

    const handleExcluirProduto = async (idProduto) => {
        try {
            await axios.delete(`http://localhost:3002/produtos/${idProduto}`);
            const { response } = await axios.get("http://localhost:3002/produtoCorImg");


            setTimeout(() => {
                window.location.reload(false);
            }, 200);

            toast.current.show({
                severity: 'success',
                summary: 'Ação bem-sucedida!',
                detail: 'Produto excluído com sucesso.',
                life: 4000,
            });

            const dataOrdenada = response.data.reverse();
            setItensFiltrados(dataOrdenada);

        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    const handleProdutoUpdateClick = (produto) => {
        navigate(`/produto/${produto.idProduto}`, { state: produto });
    };


    return (
        <>
            <Toast ref={toast} style={{ zIndex: '99999' }} />
            <Row>
                <div className="flex flex-column align-item-center">
                    {itensFiltrados.length > 0 ? (
                    itensFiltrados.map((produto, index) => (
                        <Col key={index} className="flex align-items-center gap-2 cardAllProdutos w-12 p-2 border-round-xl mx-2 my-1">
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
                                    <div className="flex">
                                        {Array.isArray(produto.coresProduto) && (
                                            <>
                                                {produto.coresProduto.length >= 2 && (<p className="mr-3 variantesCorAllProduto">{produto.coresProduto.length} variantes</p>)
                                                    || produto.coresProduto.length === 1 && (<p className="mr-3 variantesCorAllProduto">{produto.coresProduto.length} variante</p>)
                                                    || produto.coresProduto.length === 0 && (<></>)
                                                }
                                            </>
                                        )}
                                        <p className="mr-3" style={{ margin: 'unset' }}>{produto.geralCategoria}</p>
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
                                        <i className={showActionProdutos === index ? 'pi pi-ellipsis-v mr-1' : 'pi pi-ellipsis-h'} style={{ cursor: 'pointer' }} onClick={() => toggleProdutoAction(index)}></i>
                                        {showActionProdutos === index && (
                                            <div className="flex flex-column">
                                                <p
                                                    onClick={() => handleProdutoUpdateClick(produto)}
                                                    style={{ margin: 'unset' }}>Editar</p>
                                                <p
                                                    onClick={() => handleExcluirProduto(produto.idProduto)}
                                                    style={{ margin: 'unset' }}>Excluir</p>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))) : (
                    <>
                   <p style={{color:'var(--oliveWoodLow)'}}> Nenhum produto encontrado.</p>
                    </>) }

                </div>
            </Row>
        </>
    )

}