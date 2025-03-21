import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ProdutosCatalago from './ProdutosCatalogo';

export default function CarroselCatalago() {
    const [loading, setLoading] = useState(false);
    const [produtosPorCategoria, setProdutosPorCategoria] = useState({});

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3002/produtoCorImg")
            .then((res) => {
                // Agrupar os produtos por categoria
                const agrupadoPorCategoria = res.data.reduce((acc, produto) => {
                    const categoria = produto.geralCategoria;
                    if (!acc[categoria]) {
                        acc[categoria] = [];
                    }
                    acc[categoria].push(produto);
                    return acc;
                }, {});

                setProdutosPorCategoria(agrupadoPorCategoria);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const produtosCatalogoRef = useRef({});

    const scrollTabs = (categoria, direction) => {
        if (produtosCatalogoRef.current[categoria]) {
            const scrollAmount = 700; // Pixels to scroll
            produtosCatalogoRef.current[categoria].scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="tagMediumHome">
            {Object.entries(produtosPorCategoria).map(([categoria, produtos], index) => (
                <React.Fragment key={categoria}>
                    <div className="flex justify-content-center mt-2 tagMediumHomeCategoriaTitulo">
                        <p>{categoria}</p>
                    </div>
                    <div className="catalogoProdutos-container">
                        <button className="scroll-button left" onClick={() => scrollTabs(categoria, 'left')}>
                            <i className="pi pi-arrow-left" style={{ fontSize: '0.8rem' }}></i>
                        </button>
                        <div className="catalogoProdutos-content"
                            ref={el => produtosCatalogoRef.current[categoria] = el}>
                            <ProdutosCatalago itensFiltrados={produtos} categoria={categoria} />
                        </div>
                        <button className="scroll-button right" onClick={() => scrollTabs(categoria, 'right')}>
                            <i className="pi pi-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                        </button>
                    </div>

                    {/* Renderiza um banner após cada 2 carrosséis */}
                    {(index + 1) % 2 === 0 && (
                        <div className="banner">
                            <img
                                height={200}
                                src={`/imagens/jardim${Math.ceil((index + 2) / 2)}.avif`}
                                alt={`Banner ${Math.ceil((index + 1) / 3)}`}
                                className="banner-imagem w-12 my-4 border-round-xl"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
