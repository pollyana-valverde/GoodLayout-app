import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function BasicExample() {
  const faqs = [
    {
      eventKey: 0,
      header: 'Pergunta grande 1?',
      resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.'
    },
    {
      eventKey: 1,
      header: 'Pergunta grande 2?',
      resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.'
    },
    {
      eventKey: 2,
      header: 'Pergunta grande 3?',
      resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.'
    },
    {
      eventKey: 3,
      header: 'Pergunta grande 4?',
      resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.'
    },
  ]


  return (
    <div className='flex flex-column gap-2'>
      <h2 style={{ color: 'var(--oliveWood)', opacity: '0.6', fontWeight:'700' }}>Explore nosso Faq para respostas sobre o jardim e nossos produtos</h2>
      <p style={{ color: 'var(--oliveWood)', opacity: '0.5' }}>Nós estamos aqui para ajudar! Fique à vontade para navegar no nosso FAQ para entroncar todas as respostas que você precisa!</p>
      <Accordion defaultActiveKey={0} className='flex flex-column gap-3' style={{ width: '100%' }}>
        {faqs.map((faq) => (
          <Accordion.Item eventKey={faq.eventKey}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body style={{ color: 'var(--oliveWood)', opacity: '0.7' }}>
              {faq.resposta}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
