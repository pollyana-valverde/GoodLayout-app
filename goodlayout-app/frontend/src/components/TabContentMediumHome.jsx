import React from "react";
import { Col } from 'react-bootstrap';
import ImgExclusive from '../imagens/jardim1.jpg';

export default function TabContentMediumHome({ titulo, desc, tag, imgJardim }) {
    return (
        <div className="flex">
            <Col className="flex flex-wrap justify-content-center">
                <div className="relative ">
                    <img className="border-round-2xl" src={imgJardim} alt="ImgExclusive" width={350} height={350} />
                    <div className="absolute top-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute bottom-0 m-2">{tag}</h5>
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="relative">
                    <img className="border-round-2xl" src={imgJardim} alt="ImgExclusive" width={350} height={350} />
                    <div className="absolute top-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute bottom-0 m-2">{tag}</h5>
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="flex align-items-end relative">
                    <img className="border-round-2xl" src={imgJardim} alt="ImgExclusive" width={250} height={250} />
                    <div className="absolute bottom-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    {/* <h5 className="exclusive absolute top-50 m-2">{tag}</h5> */}
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="flex align-items-end relative">
                    <img className="border-round-2xl" src={imgJardim} alt="ImgExclusive" width={250} height={250} />
                    <div className="absolute bottom-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    {/* <h5 className="exclusive absolute top-50 m-2">{tag}</h5> */}
                </div>
            </Col>
        </div>
    )
};
