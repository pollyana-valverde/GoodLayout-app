import React from "react";

export default function SuporteContactInfo() {
    return (
        <>
            <div className="w-4 flex flex-column gap-5 suporteContainer">
                <div className="flex flex-column">
                    <h5>Converse conosco</h5>
                    <p className="mb-2">Fale com nosso time via live chat.</p>
                    <div className="flex flex-column gap-1">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-comments"></i>
                            <a href="#">Comece um live chat</a>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-send"></i>
                            <a href="#">Envie um email</a>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-twitter"></i>
                            <a href="#">Mande mensagem no X</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-column">
                    <h5>Ligue para nós</h5>
                    <p className="mb-2">Ligue para nosso time Seg-Qui das 8am à 5pm.</p>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-phone"></i>
                        <a href="#">+55(11)99999-9999</a>
                    </div>
                </div>
            </div>
        </>
    )
}