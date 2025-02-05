import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';

export default function TagMainLeftHome() {

    return (
        <>
            <div className="anuncioEndtHome p-3">
                <Col></Col>
                <div className="anuncioEndHomeContent flex flex-column justify-content-center align-items-center text-center gap-2">
                    <h4>Ainda tem perguntas?</h4>
                    <p>Precisa de mais ajuda pra saber como funciona nosso planejamento de jardim? Nossa esquipe está aqui para dar todo o suporte possível.</p>
                    <a href="/Suporte"><button type="button">Nos contate</button></a>
                </div>
            </div>
        </>
    )
};
