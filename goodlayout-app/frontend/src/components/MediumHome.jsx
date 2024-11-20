import React from "react";
import { Row, Col } from 'react-bootstrap';

import TextMediumHome from "./TextMediumHome";
import TabMediumHome from "./TabMediumHome";


import '../css/mediumHome.css';

export default function MediumHome() {
    return (
        <>
            <Row >
                <div className=" pt-5 pb-4 px-4 ">
                    <TextMediumHome />
                </div>
            </Row>
            <Row >
                <div className="p-4 ">
                    <TabMediumHome />
                </div>
            </Row>
        </>
    )
}