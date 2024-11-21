import React from "react";
import { Col } from 'react-bootstrap';
// import ImgExclusive from '../imagens/jardim1.jpg';

import '../css/tabContentMediumHome.css';

export default function TabContentMediumHome({ tag1, tag2, tag3, tag4, imgJardim1, imgJardim2, imgJardim3, imgJardim4 }) {
    return (
        <div className="flex flex-wrap tabContentMediumHome">
            <Col className="flex flex-wrap justify-content-center">
                <div className="relative ">
                    <img className="border-round-2xl" src={imgJardim1} alt="ImgExclusive" style={{width:'250px', height:'250px', objectFit:'cover'}} />
                    <div className="absolute top-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute bottom-0 m-2">{tag1}</h5>
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="relative">
                    <img className="border-round-2xl" src={imgJardim2} alt="ImgExclusive" style={{width:'250px', height:'250px', objectFit:'cover'}} />
                    <div className="absolute top-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute bottom-0 m-2">{tag2}</h5>
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="relative">
                    <img className="border-round-2xl" src={imgJardim3} alt="ImgExclusive" style={{width:'250px', height:'250px', objectFit:'cover'}} />
                    <div className="absolute bottom-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute top-0 m-2">{tag3}</h5>
                </div>
            </Col>
            <Col className="flex flex-wrap justify-content-center  ">
                <div className="relative">
                    <img className="border-round-2xl" src={imgJardim4} alt="ImgExclusive" style={{width:'250px', height:'250px', objectFit:'cover'}} />
                    <div className="absolute bottom-0 right-0 m-2">
                        <a href="/login">
                            <i className="pi pi-arrow-up-right "></i>
                        </a>
                    </div>
                    <h5 className="exclusive absolute top-0 m-2">{tag4}</h5>
                </div>
            </Col>
        </div>
    )
};
