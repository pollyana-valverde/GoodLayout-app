import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';



export default function TagLeftHome() {
    return (
        <>
            <div className="tagLeftHome flex gap-2">
                <button type="button" className="activeTag">
                    Ver produto 1
                </button>
                <button type="button">
                    Ver produto 2
                </button>
                <button type="button">
                    Ver produto 3
                </button>
                <button type="button">
                    Ver produto 4
                </button>
            </div>
        </>
    )
};
