import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';

export default function NewsLetterHome() {
    const toast = useRef(null);
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3002/newsletter', formData);
            toast.current.show({
                severity: 'success',
                summary: 'Inscrição concluída com sucesso!',
                life: 3000
            });
            setFormData({
                email: ''
            });
        } catch (error) {
            if (formData.email === '') {
                console.error('Erro ao se inscrever:', error);
                toast.current.show({
                    severity: 'warn',
                    summary: 'O campo não pode estar vazio.',
                    life: 3000
                });
            } else {
                console.error('Erro ao se inscrever:', error);
            toast.current.show({
                severity: 'error',
                summary: 'Esse email já foi inscrito.',
                life: 3000
            }); 
            }
           
        }
    };

    return (
        <div>
            <Toast ref={toast} />
            <div className="newsLetterHome p-4">
               <form onSubmit={handleSubmit} className="newsLetterHomeText mt-2">
                <h2>Se inscreva no nosso Newsletter</h2>
                <div className="flex gap-2 newsLetterHomeSubscribe">
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                    <button type="submit">Inscrever-se</button>
                </div>
            </form> 
            </div>
            
        </div>
    )
};
