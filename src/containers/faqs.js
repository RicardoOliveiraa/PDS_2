import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>
                Perguntas frequentes
            </Accordion.Title>
            {faqsData.map ((item =>(
                <Accordion.Item key = { item.id }> 
                    <Accordion.Header> { item.header } </Accordion.Header>
                    <Accordion.Body> { item.body } </Accordion.Body>
                </Accordion.Item>)
            ))}
        <Accordion.Item/>

        <OptForm>
            <OptForm.Input placeholder="Email"/>
            <OptForm.Button>Experimente Agora</OptForm.Button>
            <OptForm.Break/>
            <OptForm.Text>Pronto para assistir? Escreva seu email para se inscrever</OptForm.Text>
        </OptForm>

        </Accordion>
    );
}