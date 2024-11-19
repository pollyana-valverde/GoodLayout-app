import React, { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { Col } from 'react-bootstrap';
import '../css/tagRightHome.css';

import AnuncioRightHome from "./AnuncioRightHome";

export default function TagRightHome() {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabMainRightHome = [
        {
            header: 'Exclusivo',
            content:
                <AnuncioRightHome
                    titulo='Jardim caseiro chic'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Exclusivo'
                />
        },
        {
            header: 'Moderno',
            content:
                <AnuncioRightHome
                    titulo='Jardim caseiro chic'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Moderno'
                />
        },
        {
            header: 'Caro',
            content:
                <AnuncioRightHome
                    titulo='Jardim caseiro chic'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Caro'
                />
        },
        {
            header: 'Barato',
            content:
                <AnuncioRightHome
                    titulo='Jardim caseiro chic'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Barato'
                />
        },

    ];

    return (
        <>
            <Col className="flex gap-3 align-content-center justify-content-center tagRightHome">
                <TabView
                    className='flex tagRightHome relative overflow-hidden'
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                >
                    {tabMainRightHome.map((contentSidebar, index) => (
                        <TabPanel key={index} header={contentSidebar.header}>
                            <p className="flex flex-wrap m-0  ">
                                {contentSidebar.content}
                            </p>
                        </TabPanel>
                    ))}
                </TabView>
            </Col>
        </>
    )
};
