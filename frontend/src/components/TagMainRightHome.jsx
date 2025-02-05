import React, { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { Col } from 'react-bootstrap';
import '../css/tagRightHome.css';

import AnuncioRightHome from "./AnuncioMainRightHome";

import Imgjardim1 from '../imagens/jardim1.jpg';
import Imgjardim2 from '../imagens/jardim2.avif';
import Imgjardim3 from '../imagens/jardim3.avif';
import Imgjardim4 from '../imagens/jardim4.avif';


export default function TagMainRightHome() {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabMainRightHome = [
        {
            header: 'Exclusivo',
            content:
                <AnuncioRightHome
                    titulo='Estufa clássica'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Exclusivo'
                    imgJardim={Imgjardim1}
                />
        },
        {
            header: 'Moderno',
            content:
                <AnuncioRightHome
                    titulo='Estufa moderna'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Moderno'
                    imgJardim={Imgjardim2}
                />
        },
        {
            header: 'Caro',
            content:
                <AnuncioRightHome
                    titulo='Jardim de margaridas'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Caro'
                    imgJardim={Imgjardim3}
                />
        },
        {
            header: 'Barato',
            content:
                <AnuncioRightHome
                    titulo='Jardim caseiro'
                    desc='Bonito, aconchegante e estiloso Bonito, aconchegante e estiloso'
                    tag='Barato'
                    imgJardim={Imgjardim4}
                />
        },
        

    ];

    return (
        <>
            <Col className="flex gap-3 align-content-center justify-content-center tagRightHome">
                <TabView
                    className='flex flex-column relative overflow-hidden'
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
