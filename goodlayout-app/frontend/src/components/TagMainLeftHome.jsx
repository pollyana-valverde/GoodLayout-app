import React, { useState } from "react";

export default function TagMainLeftHome() {

    const [tabMainLeftHome] = useState([
        {
            nome: "Home",
        },
        {
            nome: "Catálogo",
        },
        {
            nome: "Suporte",
        },
        {
            nome: "Sobre nós",
        },
        {
            nome: "Outro",
        }
    ]);

    // Estado para rastrear o link ativo
    const [activeLink, setActiveLink] = useState(() => {
        // Recupera o link ativo do localStorage, se existir
        const savedLink = localStorage.getItem("activeLink");
        return savedLink ? JSON.parse(savedLink) : tabMainLeftHome[0];
    });

    // Função para atualizar o link ativo e salvar no localStorage
    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", JSON.stringify(link));
    };

    return (
        <>
            <div className="tagLeftHome flex gap-2">
                {tabMainLeftHome.map((link) => (
                    <button
                        key={link.nome}
                        type="button"
                        className={activeLink.nome === link.nome ? "activeTag" : ""}
                        onClick={() => handleLinkClick(link)}
                    >
                        {link.nome}
                    </button>
                    ))}
            </div>
        </>
    )
};
