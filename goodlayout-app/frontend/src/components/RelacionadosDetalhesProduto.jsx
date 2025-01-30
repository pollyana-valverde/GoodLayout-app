

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProdutosCatalago from './ProdutosCatalogo';

export default function RelacionadosDetalhesProduto() {
    const location = useLocation();
    const { geralCategoria } = location.state || {};
    const [loading, setLoading] = useState(false);
    // const [allProdutos, setAllProdutos] = useState([]);
    const [itensFiltrados, setItensFiltrados] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3002/produtoCorImg")
            .then((res) => {
                // setAllProdutos(res.data);
                setItensFiltrados(res.data);
            })
            .catch(err => (err))
            .finally(() => setLoading(false));
    }, []);

    const produtosCatalogoRef = useRef(null);

    const scrollTabs = (direction) => {
        if (produtosCatalogoRef.current) {
            const scrollAmount = 700; // Pixels to scroll
            produtosCatalogoRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="RelacionadosDetalhesProduto_container">
            <React.Fragment>
                <div className="flex justify-content-between mt-2">
                    <h5 className='m-0' style={{ color: 'var(--oliveWood)' }}>Produtos relacionados</h5>
                    <a href="/">
                        <p className='font-bold m-0' style={{ color: 'var(--tuscanRed)' }}>
                            Veja todos
                        </p>
                    </a>
                </div>
                <div className="catalogoProdutos-container">
                    <button className="scroll-button left" onClick={() => scrollTabs('left')}><i className="pi pi-arrow-left" style={{ fontSize: '0.8rem' }}></i></button>
                    <div className=" catalogoProdutos-content" ref={produtosCatalogoRef}>
                        <ProdutosCatalago itensFiltrados={itensFiltrados} categoria={geralCategoria} />
                    </div>
                    <button className="scroll-button right" onClick={() => scrollTabs('right')}><i className="pi pi-arrow-right" style={{ fontSize: '0.8rem' }}></i></button>
                </div>
            </React.Fragment>


        </div>
    );
}

