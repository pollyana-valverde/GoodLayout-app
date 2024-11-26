import React from "react";

export default function NewsLetterHome() {
    return (
        <div className="newsLetterHomeText mt-2">
            <h2>Se inscreva no nosso Newsletter</h2>
            <div className="flex gap-2 newsLetterHomeSubscribe">
                <input type="text" placeholder="Digite seu e-mail" />
                <button type="submit">Inscrever-se</button>
            </div>
        </div>
    )
};
