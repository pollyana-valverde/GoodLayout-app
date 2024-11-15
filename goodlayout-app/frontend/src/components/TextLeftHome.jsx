import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function TextLeftHome() {
    return (
        <>
            <h2>Jardim caseiro chic</h2>
            <p> Bonito, aconchegante e estiloso</p>
            <div className="callBacktLeftHome">
                <a href="#">
                    <button type="button">
                        Ver produto
                    </button>
                    <i className="pi pi-arrow-up-right"></i>
                </a>
            </div>
        </>
    )
};
