

import React, { useState, useRef } from 'react';
import Imgjardim1 from '../imagens/jardim1.jpg';
import TabContentMediumHome from './TabContentMediumHome';
import '../css/tabMediumHome.css';

export default function TabMediumHome() {
    const scrollableTabs = [
        {
            title: 'Luxe Lounge Chair',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Moderno'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Sleek Modular Sofa',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Luxuoso'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Minimalist Coffee Table',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Exclusivo'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Modern Floor Lamps',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Barato'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Elegant Shelving Units',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Caro'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Compact Dining Set',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Caro'
                    imgJardim={Imgjardim1}
                />
        },
        {
            title: 'Contemporary Bed Frame',
            content:
                <TabContentMediumHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Caro'
                    imgJardim={Imgjardim1}
                />
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const tabsContainerRef = useRef(null);

    const scrollTabs = (direction) => {
        if (tabsContainerRef.current) {
            const scrollAmount = 150; // Pixels to scroll
            tabsContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="tagMediumHome">
            <div className="tab-header-container">
                <button className="scroll-button left" onClick={() => scrollTabs('left')}><i className="pi pi-arrow-left" style={{ fontSize: '0.8rem' }}></i></button>
                <div className="tab-header" ref={tabsContainerRef}>
                    {scrollableTabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollTabs('right')}><i className="pi pi-arrow-right" style={{ fontSize: '0.8rem' }}></i></button>
            </div>
            <div className="tab-content">
                {scrollableTabs[activeTab]?.content}
            </div>
        </div>
    );
}

