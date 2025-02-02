import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../provider/AuthProvider";
import { Container, Row, Col } from 'react-bootstrap';
import ListaCarrinhoCompra from "../../components/ListaCarrinhoCompra";
import ResumoCarrinhoCompra from "../../components/ResumoCarrinhoCompra";

import '../../css/carrinhoCompra.css';

export default function CarrinhoCompra() {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;

    const [allCarrinhoCompra, setAllCarrinhoCompra] = useState([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [totalDescontos, setTotalDescontos] = useState(0);
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
            setTotalDescontos(0);
            return;
        }

        let total = 0;
        let descontos = 0;

        produtos.forEach(produto => {
            const preco = parseFloat(produto.precoBase) || 0;
            const quantidade = parseInt(produto.quantProduto) || 1;
            const desconto = parseFloat(produto.quantDesconto) || 0; // Desconto por produto

            total += preco * quantidade;
            descontos += desconto * quantidade; // Considera o desconto multiplicado pela quantidade
        });

        setTotalProdutos(total);
        setTotalDescontos(descontos);
    };



    return (
        <Container className="mt-8"> 
            <Col lg={1} className="returnCatalogo_detalhesProdutos">
                <a href="/" className="mb-2">
                    <i className="pi pi-arrow-left font-bold mr-2"></i>
                    <p className='m-0 font-medium'>Voltar</p>
                </a>
            </Col>
            <Row className=" flex align-items-center relative">
                <Col lg={7}>
                    <ListaCarrinhoCompra allCarrinhoCompra={allCarrinhoCompra} handleExcluirProduto={handleExcluirProduto} />
                </Col>
                <Col lg={5} className="fixed mt-8 top-0 right-0 ">
                    <ResumoCarrinhoCompra
                        totalProdutos={totalProdutos}
                        TAXA_PADRAO={TAXA_PADRAO}
                        TAXA_ENTREGA={TAXA_ENTREGA}
                        totalDescontos={totalDescontos}
                    />
                </Col>
            </Row>
        </Container>
    );
}
