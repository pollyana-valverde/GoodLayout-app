

import React, { useState, useRef } from 'react';
import Imgjardim1 from '../imagens/jardim5.avif';
import Imgjardim2 from '../imagens/jardim2.avif';
import Imgjardim3 from '../imagens/jardim3.avif';
import Imgjardim4 from '../imagens/jardim4.avif';
import ProdutosCatalago from './ProdutosCatalogo';

export default function CarroselCatalago() {
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
            <div className="catalogoProdutos-container">
                <button className="scroll-button left" onClick={() => scrollTabs('left')}><i className="pi pi-arrow-left" style={{ fontSize: '0.8rem' }}></i></button>
                <div className=" catalogoProdutos-content" ref={produtosCatalogoRef}>
                    {scrollableTabs.map((tab, index) => (
                        <div>
                            {tab.content}
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollTabs('right')}><i className="pi pi-arrow-right" style={{ fontSize: '0.8rem' }}></i></button>
            </div>

        </div>
    );
}

