

import React, { useState, useRef } from 'react';
import Imgjardim1 from '../imagens/jardim5.avif';
import Imgjardim2 from '../imagens/jardim2.avif';
import Imgjardim3 from '../imagens/jardim3.avif';
import Imgjardim4 from '../imagens/jardim4.avif';
import TabContentMediumHome from './TabContentMediumHome';
import '../css/tabMediumHome.css';

export default function TabMediumHome() {
    const scrollableTabs = [
        {
            title: 'Luxe Lounge Chair',
            content:
                <TabContentMediumHome
                    tag1='Luxe'
                    tag2='Lounge'
                    tag3='Chair'
                    tag4='Modern'
                    imgJardim1={Imgjardim1}
                    imgJardim2={Imgjardim2}
                    imgJardim3={Imgjardim3}
                    imgJardim4={Imgjardim4}
                />
        },
        {
            title: 'Sleek Modular Sofa',
            content:
                <TabContentMediumHome
                    tag1='Sleek'
                    tag2='Modular'
                    tag3='Sofa'
                    tag4='Modern'
                    imgJardim1={Imgjardim1}
                    imgJardim2={Imgjardim3}
                    imgJardim3={Imgjardim4}
                    imgJardim4={Imgjardim2}
                />
        },
        {
            title: 'Minimalist Coffee Table',
            content:
                <TabContentMediumHome
                    tag1='Minimalist'
                    tag2='Coffee'
                    tag3='Table'
                    tag4='Modern'
                    imgJardim1={Imgjardim3}
                    imgJardim2={Imgjardim4}
                    imgJardim3={Imgjardim2}
                    imgJardim4={Imgjardim1}
                />
        },
        {
            title: 'Modern Floor Lamps',
            content:
                <TabContentMediumHome
                    tag1='Modern'
                    tag2='Floor'
                    tag3='Lamps'
                    tag4='Modern'
                    imgJardim1={Imgjardim2}
                    imgJardim2={Imgjardim1}
                    imgJardim3={Imgjardim3}
                    imgJardim4={Imgjardim4}
                />
        },
        {
            title: 'Elegant Shelving Units',
            content:
                <TabContentMediumHome
                    tag1='Elegant'
                    tag2='Shelving'
                    tag3='Units'
                    tag4='Modern'
                    imgJardim1={Imgjardim4}
                    imgJardim2={Imgjardim3}
                    imgJardim3={Imgjardim2}
                    imgJardim4={Imgjardim1}
                />
        },
        {
            title: 'Compact Dining Set',
            content:
                <TabContentMediumHome
                    tag1='Compact'
                    tag2='Dining'
                    tag3='Set'
                    tag4='Modern'
                    imgJardim1={Imgjardim1}
                    imgJardim2={Imgjardim2}
                    imgJardim3={Imgjardim3}
                    imgJardim4={Imgjardim4}
                />
        },
        {
            title: 'Contemporary Bed Frame',
            content:
                <TabContentMediumHome
                    tag1='Contemporary'
                    tag2='Bed'
                    tag3='Frame'
                    tag4='Modern'
                    imgJardim1={Imgjardim1}
                    imgJardim2={Imgjardim3}
                    imgJardim3={Imgjardim4}
                    imgJardim4={Imgjardim2}
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

