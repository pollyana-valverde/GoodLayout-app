import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import TabelaAllProdutos from "../../components/TabelaAllProdutos";
import FilterAllProdutos from "../../components/FilterAllProdutos";


export default function AllProdutos() {
    const [loading, setLoading] = useState(false);
    const [salvar, setSalvar] = useState(false);
    const [allProdutos, setAllProdutos] = useState([]);
    const [produtoNome, setProdutoNome] = useState('');

    const [itensFiltrados, setItensFiltrados] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3002/produtoCorImg")
            .then((res) => {
                setAllProdutos(res.data);
                setItensFiltrados(res.data);
            })
            .catch(err => (err))
            .finally(() => setLoading(false));
    }, []);


    const workFilter = (produtoStatus, produtoEstoque, geralCategories) => {
        const normalizeString = (str) =>
            str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

        const produtoStatusNormalized = normalizeString(produtoStatus.trim());
        const produtoEstoqueNormalized = normalizeString(produtoEstoque.trim());
        const geralCategoriesNormalized = normalizeString(geralCategories.trim());

        const filtroMostra = allProdutos.filter((produto) => {
            let matchesStatus = true;
            let matchesEstoque = true;

            // Filtragem com base no status selecionado
            switch (produtoStatusNormalized) {
                case "ativo":
                    matchesStatus = produto.publicacao.toLowerCase() === "publicado";
                    break;
                case "inativo":
                    matchesStatus = produto.publicacao.toLowerCase() === "";
                    break;
                case "rascunho":
                    matchesStatus = produto.rascunho === "1";
                    break;
                default:
                    matchesStatus = true; // "Todos"
            }

            switch (produtoEstoqueNormalized) {
                case "baixo_estoque":
                    matchesEstoque = parseInt(produto.estoque, 10) < 50;
                    break;
                case "limite_estoque":
                    matchesEstoque = parseInt(produto.estoque, 10) === 50;
                    break;
            }

            // Filtragem adicional com base na categoria geral
            const matchesCategory = normalizeString(produto.geralCategoria).includes(
                geralCategoriesNormalized
            );

            return matchesStatus && matchesCategory && matchesEstoque;
        });

        setItensFiltrados(filtroMostra);
    };

    const clearFilter = () => {
        setItensFiltrados(allProdutos);
    };

    return (
        <Container >
            <Row className="flex justify-content-center w-12 mt-4">
                <Col lg={12}>
                    <h5 className="text-sm font-semibold" style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }}>Todos os produtos</h5>
                </Col>
                <Col lg={12} className="flex align-items-center justify-content-between gap-4 m-2  headerAllProdutos_filterAll">
                    <div className="filterAll align-items-center flex">
                        <input
                            onChange={(e) => setProdutoNome(e.value)}
                            placeholder="Pesquise pelo nome do produto..."
                            name="produtoNome"
                            style={{ margin: 'unset', color: 'var(--oliveWoodLow)' }} />
                        <button className="text-sm ">Buscar</button>
                    </div>
                    <a href="/addProduto" >
                        <button className="text-sm ">Adicionar produto</button>
                    </a>
                </Col>
            </Row>
            <Row className="flex">
                <Col lg={9}>
                    <TabelaAllProdutos itensFiltrados={itensFiltrados} setItensFiltrados={setItensFiltrados} />
                </Col>
                <Col lg={3}>
                    <FilterAllProdutos onFilter={workFilter} onClear={clearFilter} />
                </Col>
            </Row>


        </Container>
    )
}