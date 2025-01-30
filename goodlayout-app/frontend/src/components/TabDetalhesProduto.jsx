
import React from 'react';
import { useLocation } from 'react-router-dom';
import { TabView, TabPanel } from 'primereact/tabview';
import { Col } from 'react-bootstrap';
import '../css/tabDetalhesProduto.css';

export default function TabDetalhesProduto() {
    const location = useLocation();
    const { geralCategoria, subCategoria, peso, altura, largura, profundidade, madeira, revestimento, ferragem, acabamento, vidro } = location.state || {};

    return (
        <div className='tabDetalhesProduto_container'>
            <TabView>
                <TabPanel header="Especificações" className='flex'>
                    <Col className='especificações_produto'>
                        <p className="m-0">Categoria: <span>{geralCategoria}</span></p>
                        <p className="m-0">Subcategoria: <span>{subCategoria}</span> </p>
                        <p className="m-0">Peso: <span>{peso} kg</span></p>
                        <p className="m-0">Altura: <span>{altura} cm</span></p>
                        <p className="m-0">Largura: <span>{largura} cm</span></p>
                        <p className="m-0">Profundidade: <span>{profundidade} cm</span></p>
                    </Col>

                    <Col className='especificações_produto'>
                        <p className="m-0">Tipo de madeira: <span>{madeira}</span> </p>
                        <p className="m-0">Tipo de revestimento: <span>{revestimento}</span> </p>
                        <p className="m-0">Tipo de ferragem: <span>{ferragem}</span> </p>
                        <p className="m-0">Tipo de acabamento: <span>{acabamento}</span> </p>
                        <p className="m-0">Tipo de vidro: <span>{vidro}</span></p>
                    </Col>
                </TabPanel>
                <TabPanel header="Avaliações">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
