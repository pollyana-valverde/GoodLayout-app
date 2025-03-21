import React from "react";

export default function ResumoCarrinhoCompra({ totalProdutos, TAXA_PADRAO, TAXA_ENTREGA, totalDescontos }) {
    const totalComDesconto = (parseFloat(totalProdutos) || 0) - (parseFloat(totalDescontos) || 0);
    const totalFinal = totalComDesconto + TAXA_PADRAO + TAXA_ENTREGA;

    return (
        <div className="flex flex-column gap-1 mt-3 resumoCarrinhoCompra_corpo justify-content-between">
            <h5 className="mb-2">Detalhes da compra</h5>
            <div >
                <div className="flex align-items-center justify-content-between">
                    <p>Subtotal: </p>
                    <h5>R$ {totalProdutos.toFixed(2)}</h5>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <p>Desconto: </p>
                    <h5>-R$ {totalDescontos.toFixed(2)}</h5>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <p>Subtotal com desconto: </p>
                    <h5>R$ {totalComDesconto.toFixed(2)}</h5>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <p>Taxa Padrão: </p>
                    <h5>R$ {TAXA_PADRAO.toFixed(2)}</h5>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <p>Taxa de Entrega: </p>
                    <h5>R$ {TAXA_ENTREGA.toFixed(2)}</h5>
                </div>
                <div className="resumoCarrinhoCompra_total my-3 "></div>
                <div className="flex align-items-center mb-3 justify-content-between ">
                    <h4>Total: </h4>
                    <h4>R$ {totalFinal.toFixed(2)}</h4>
                </div>
                <a href="/pagamento">
                    <button className="w-12 " type="button">Comprar agora</button>
                </a>
            </div>
        </div>
    );
}
