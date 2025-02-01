import React from "react";

export default function ResumoCarrinhoCompra({ totalProdutos, TAXA_PADRAO, TAXA_ENTREGA }) {
    const totalComTaxas = (parseFloat(totalProdutos) || 0) + (parseFloat(TAXA_PADRAO) || 0) + (parseFloat(TAXA_ENTREGA) || 0);

    return (
        <div className="flex flex-column gap-2">
            {totalProdutos ? (
                <>
                    <h3>Subtotal: R$ {totalProdutos.toFixed(2)}</h3>
                    <h3>Taxa Padrão: R$ {TAXA_PADRAO.toFixed(2)}</h3>
                    <h3>Taxa de Entrega: R$ {TAXA_ENTREGA.toFixed(2)}</h3>
                    <h3><strong>Total com Taxas: R$ {totalComTaxas.toFixed(2)}</strong></h3>
                </>
            ) : (
                <>
                    <h3>Subtotal: R$ 0</h3>
                    <h3>Taxa Padrão: R$ 0</h3>
                    <h3>Taxa de Entrega: R$ 0</h3>
                    <h3><strong>Total com Taxas: R$ 0</strong></h3>
                </>
            )}
        </div>
    );
}
