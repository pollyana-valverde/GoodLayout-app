import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function ListaCarrinhoCompra({ allCarrinhoCompra, handleExcluirProduto }) {

    return (
        <div className="flex flex-column gap-2">
            {
                allCarrinhoCompra.map((allCarrinho, index) => (
                    <div key={index} className="flex justify-content-between align-items-center">
                        <div className="flex gap-3 align-items-center">
                            <img
                                className="border-round-3xl"
                                src={`http://localhost:3002${allCarrinho.Img_id}`}
                                alt="Produto"
                                width={140}
                                height={140}
                                style={{objectFit:'cover'}}
                            />
                            <div className="flex flex-column quantidadeProduto_geralDetalhesProduto">
                                <h5 className="m-0">{allCarrinho.nomeProduto}</h5>
                                <p className="m-0">{allCarrinho.geralCategoria}</p>
                                <p className="m-0">{allCarrinho.cores_id}</p>
                                <InputNumber
                                    name='quantProduto'
                                    value={allCarrinho.quantProduto}
                                    // onValueChange={handleChange} 
                                    showButtons
                                    buttonLayout="horizontal"
                                    style={{ width: '4rem' }}
                                    decrementButtonClassName="p-button-secondary left"
                                    incrementButtonClassName="p-button-secondary right"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus" />
                            </div>
                        </div>

                        <div className="flex flex-column justify-content-between">
                            <i className="pi pi-trash " onClick={() => handleExcluirProduto(allCarrinho.idCarrinhocompra)}></i>
                            <h5 className="m-0">R${allCarrinho.precoBase}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}