import React from "react";

export default function ListaCarrinhoCompra({ allCarrinhoCompra, handleExcluirProduto }) {

    return (
        <div className="flex flex-column gap-2 ">
            {
                allCarrinhoCompra.map((allCarrinho, index) => (
                    <div key={index} className="flex justify-content-between align-items-center listaCarrinhoCompra_corpo">
                        <div className="flex gap-3 align-items-center">
                            <img
                                className="border-round-3xl"
                                src={`http://localhost:3002/${allCarrinho.Img_id}`}
                                alt="Produto"
                                width={140}
                                height={140}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="flex flex-column quantidadeProduto_geralDetalhesProduto">
                                <h4 >{allCarrinho.nomeProduto}</h4>
                                <p className="m-0">Categoria: <span>{allCarrinho.geralCategoria}</span></p>
                                <p className="m-0">Cor: <span>{allCarrinho.cores_id}</span></p>
                                <p className="m-0">Quantidade: <span>{allCarrinho.quantProduto}</span></p>

                            </div>
                        </div>

                        <div className="flex flex-column gap-6 align-items-end mr-2">
                            <i className="pi pi-trash " onClick={() => handleExcluirProduto(allCarrinho.idCarrinhocompra)}></i>
                            <h4 className="m-0">R${(parseFloat(allCarrinho.precoBase).toFixed(2))}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}