import React, { useState, useRef } from "react";
import axios from "axios";
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useAuth } from "../provider/AuthProvider";
import { InputNumber } from 'primereact/inputnumber';
import imgTeste from '../imagens/jardim2.avif';
import { Toast } from 'primereact/toast';
import { Rating } from "primereact/rating";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function GeralDetalhesProduto() {
    const { tokenGL } = useAuth();
    const userData = tokenGL ? JSON.parse(tokenGL) : null;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const toast = useRef(null);
    const location = useLocation();
    const { nomeProduto, precoBase, coresProduto, descProduto, imgProduto, idProduto } = location.state || {};
    const [corGet, setCorGet] = useState(coresProduto[0].nomeCor);
    const [formData, setFormData] = useState({
        cliente_id: userData.idCadastro,
        produto_id: idProduto,
        cores_id: coresProduto[0]?.nomeCor || '',
        Img_id: imgProduto[0].imgCaminho,
        quantProduto: 1,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleGetColor = (color) => {
        setCorGet(color);
        setFormData((prevData) => ({
            ...prevData,
            cores_id: color, // Atualiza apenas a cor selecionada
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:3002/carrinhocompra/', formData);

            console.log('novo produto no carrinho: ', response);

            toast.current.show({
                severity: 'success',
                summary: 'Produto adicionado ao carrinho!',
                life: 3000
            });

            setFormData({
                cliente_id: userData.idCadastro,
                produto_id: idProduto,
                cores_id: coresProduto[0]?.nomeCor || '',
                Img_id: imgProduto[0].imgCaminho,
                quantProduto: 1,
            });

            // setTimeout(() => {
            //     window.location.reload(false);
            //   }, 1000);


        } catch (error) {

            console.error('Erro ao publicar produto:', error);
        }
    };

    return (
        <div className="flex gap-6" key={idProduto}>
            <Toast ref={toast} className="mt-5" />
            <Col lg={5}>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {imgProduto?.map((imagemprod, index) => (
                        <SwiperSlide>
                            <img
                                className="border-round-3xl"
                                src={imagemprod.imgCaminho ? `http://localhost:3002${imagemprod.imgCaminho}` : imgTeste}
                                alt="Produto"
                                style={{ width: '88%' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={2}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {imgProduto?.map((imagemprod, index) => (
                        <SwiperSlide>
                            <img
                                className="border-round-3xl"
                                src={imagemprod.imgCaminho ? `http://localhost:3002${imagemprod.imgCaminho}` : imgTeste}
                                alt="Produto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Col>
            <Col lg={7} className="flex flex-column gap-3 justify-content-center geralDetalhesProduto_content">
                <h1 className="white-space-normal" style={{ margin: 'unset' }}>{nomeProduto} 27 caracteres</h1>
                <p className="descProduto" style={{ margin: 'unset', overflowWrap:'anywhere' }}>
                    {descProduto} pode ser o lorem mesmo
                </p>
                <div className="flex gap-2">
                    <Rating value={4} readOnly cancel={false} />
                    <p style={{ margin: 'unset' }}> (quant. avaliação)</p>
                </div>
                <h5 style={{ margin: 'unset' }}>R${(parseFloat(precoBase).toFixed(2))}</h5>
                <div className="flex flex-column gap-2">
                    <div className="flex gap-2 quantidadeProduto_geralDetalhesProduto">
                        <InputNumber name='quantProduto' value={formData.quantProduto} onValueChange={handleChange} showButtons buttonLayout="horizontal" style={{ width: '4rem' }}
                            decrementButtonClassName="p-button-secondary left" incrementButtonClassName="p-button-secondary right" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    </div>
                </div>
                <div className="flex flex-column gap-2">
                    <p className="coresTitle" style={{ margin: 'unset' }}>Cores disponíveis</p>
                    <div className="flex gap-2">
                        {coresProduto?.map((color, index) => (
                            <div className={`border-circle ${corGet === color.nomeCor ? 'corSelecionada' : 'corNAOSelecionada'}`}>
                                <div className='border-circle'
                                    onClick={() => handleGetColor(color.nomeCor)}
                                    key={index}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        backgroundColor: color.nomeCor,
                                    }}
                                >
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-12 geralDetalhesProduto_actions flex gap-2 mt-4">
                    <a className="w-6" href="/pagamento">
                        <button className="buyNow w-12" type="button">Comprar agora</button>
                    </a>
                    <button className="w-6" type="button" onClick={handleSubmit}>Adicionar no carrinho</button>
                </div>
            </Col>
        </div>
    )
}