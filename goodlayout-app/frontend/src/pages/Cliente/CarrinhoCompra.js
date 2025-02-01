import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../provider/AuthProvider";
import { Container, Row, Col } from 'react-bootstrap';
import ListaCarrinhoCompra from "../../components/ListaCarrinhoCompra";
import ResumoCarrinhoCompra from "../../components/ResumoCarrinhoCompra";

export default function CarrinhoCompra() {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;

    const [allCarrinhoCompra, setAllCarrinhoCompra] = useState([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const TAXA_PADRAO = 5;
    const TAXA_ENTREGA = 10;

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calcularTotal(allCarrinhoCompra);
    }, [allCarrinhoCompra]); // Sempre recalcula quando a lista de produtos muda

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3002/carrinhocompra');
            const dataOrdenada = response.data.reverse();
            const idUser = userData.idCadastro;

            const userCarrinhoData = dataOrdenada.filter(item => item.cliente_id === idUser);

            setAllCarrinhoCompra(userCarrinhoData);
        } catch (error) {
            console.error('Erro ao buscar dados do carrinho:', error);
        }
    };

    const handleExcluirProduto = async (idCarrinhocompra) => {
        try {
            await axios.delete(`http://localhost:3002/carrinhocompra/${idCarrinhocompra}`);
            fetchData(); // Atualiza os dados após excluir

        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    const calcularTotal = (produtos) => {
        if (!produtos || produtos.length === 0) {
            setTotalProdutos(0);
            return;
        }
    
        const total = produtos.reduce((acc, produto) => {
            const preco = parseFloat(produto.precoBase) || 0;
            const quantidade = parseInt(produto.quantProduto) || 1; // Se quantidade for indefinida, assume 1
            return acc + preco * quantidade;
        }, 0);
    
        setTotalProdutos(total);
    };
    


    return (
        <Container>
            <Row className="mt-8 flex">
                <Col>
                    <ListaCarrinhoCompra allCarrinhoCompra={allCarrinhoCompra} handleExcluirProduto={handleExcluirProduto} />
                </Col>
                <Col>
                    <ResumoCarrinhoCompra
                        totalProdutos={totalProdutos}
                        TAXA_PADRAO={TAXA_PADRAO}
                        TAXA_ENTREGA={TAXA_ENTREGA}
                    />
                </Col>
            </Row>
        </Container>
    );
}
