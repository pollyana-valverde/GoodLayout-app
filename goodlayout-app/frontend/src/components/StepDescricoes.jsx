
import React, { useState } from "react";
import { Editor } from "primereact/editor";

import '../css/stepDescricoes.css';

export default function BasicDemo() {
    const [text, setText] = useState('');

    return (
        <div >
            <h5>Descrição detalhada do produto</h5>
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        