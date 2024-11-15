import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function TagRightHome() {
    return (
        <>
            <Col className="flex gap-3 align-content-center justify-content-center tagRightHome">
                <button type="button" className="activeTag">
                    Ver produto
                </button><button type="button">
                    Ver produto
                </button><button type="button">
                    Ver produto
                </button><button type="button">
                    Ver produto
                </button>
            </Col>
        </>
    )
};
