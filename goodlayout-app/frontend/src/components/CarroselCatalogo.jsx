

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Imgjardim1 from '../imagens/jardim5.avif';
import Imgjardim2 from '../imagens/jardim2.avif';
import Imgjardim3 from '../imagens/jardim3.avif';
import Imgjardim4 from '../imagens/jardim4.avif';
import ProdutosCatalago from './ProdutosCatalogo';

export default function CarroselCatalago() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [allProdutos, setAllProdutos] = useState([]);
    const [itensFiltrados, setItensFiltrados] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3002/categorias_moveis_externos");
                const categoriasList = data.map(item => item.nome_categoria);
                setCategorias(categoriasList);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        fetchData();
    }, []);

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


    const scrollableTabs = [
        {
            content:
                <ProdutosCatalago
                    tag='Luxe'
                    imgJardim={Imgjardim1}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Lounge'
                    imgJardim={Imgjardim2}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Chair'
                    imgJardim={Imgjardim3}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Modern'
                    imgJardim={Imgjardim4}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Modern'
                    imgJardim={Imgjardim4}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Modern'
                    imgJardim={Imgjardim4}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Modern'
                    imgJardim={Imgjardim4}
                />
        },
        {
            content:
                <ProdutosCatalago
                    tag='Modern'
                    imgJardim={Imgjardim4}
                />
        },
    ];

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
        <div className="tagMediumHome">
            {categorias.map((categoria, index) => (
                <React.Fragment key={index}>
                    <div className="flex justify-content-end mt-3">
                        <p style={{ margin: 'unset' }}>
                            {categoria}
                        </p>
                    </div>
                    <div className="catalogoProdutos-container">
                        <button className="scroll-button left" onClick={() => scrollTabs('left')}><i className="pi pi-arrow-left" style={{ fontSize: '0.8rem' }}></i></button>
                        <div className=" catalogoProdutos-content" ref={produtosCatalogoRef}>
                            <ProdutosCatalago itensFiltrados={itensFiltrados} categoria={categoria} />
                        </div>
                        <button className="scroll-button right" onClick={() => scrollTabs('right')}><i className="pi pi-arrow-right" style={{ fontSize: '0.8rem' }}></i></button>
                    </div>

                    {/* Renderiza um banner após cada 3 carrosséis */}
                    {(index + 1) % 2 === 0 && (
                        <div className="banner ">
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

