import React from "react";
import { Col } from 'react-bootstrap';
// import ImgExclusive from '../imagens/jardim1.jpg';


export default function TabContentMediumHome({ tag1, tag2, tag3, tag4, imgJardim1, imgJardim2, imgJardim3, imgJardim4 }) {
    return (
        <div className="flex flex-wrap tabContentMediumHome justify-content-between gap-2">
            <Col className="flex flex-wrap justify-content-center tabContentInterMediumHome relative">
                <img src={imgJardim1} alt="ImgExclusive" />
                <div className="absolute top-0 right-0 m-2">
                    <a href="/login">
                        <i className="pi pi-arrow-up-right "></i>
                    </a>
                </div>
                <h5 className="exclusive absolute bottom-0 m-3">{tag1}</h5>
            </Col>
            <Col className="flex flex-wrap justify-content-center tabContentInterMediumHome relative">
                <img src={imgJardim4} alt="ImgExclusive" />
                <div className="absolute top-0 right-0 m-2">
                    <a href="/login">
                        <i className="pi pi-arrow-up-right "></i>
                    </a>
                </div>
                <h5 className="exclusive absolute bottom-0 m-3">{tag2}</h5>
            </Col>
            <Col className="flex flex-wrap justify-content-center tabContentInterMediumHome relative">
                <img src={imgJardim3} alt="ImgExclusive" />
                <div className="absolute bottom-0 right-0 m-2">
                    <a href="/login">
                        <i className="pi pi-arrow-up-right "></i>
                    </a>
                </div>
                <h5 className="exclusive absolute top-0 m-3">{tag3}</h5>
            </Col>
            <Col className="flex flex-wrap justify-content-center tabContentInterMediumHome relative">
                <img src={imgJardim4} alt="ImgExclusive" />
                <div className="absolute bottom-0 right-0 m-2">
                    <a href="/login">
                        <i className="pi pi-arrow-up-right "></i>
                    </a>
                </div>
                <h5 className="exclusive absolute top-0 m-3">{tag4}</h5>
            </Col>
            <Col className="flex flex-wrap justify-content-center tabContentInterMediumHome relative">
                <img src={imgJardim4} alt="ImgExclusive" />
                <div className="absolute bottom-0 right-0 m-2">
                    <a href="/login">
                        <i className="pi pi-arrow-up-right "></i>
                    </a>
                </div>
                <h5 className="exclusive absolute top-0 m-3">{tag4}</h5>
            </Col>
        </div>
    )
};
