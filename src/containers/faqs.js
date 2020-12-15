import React, { useState, useContext } from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import { Form } from  '../components';
import faqsData from '../fixtures/faqs.json';
import * as ROUTES from '../constants/routes';

export function FaqsContainer() {
    const [email, setEmail] = useState('');

    const isInvalid = (email) => {
        const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

        return !isValidEmail
    }

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
                <OptForm.Input 
                    placeholder="Email"
                    value={email}
                    onChange={ ({ target }) => setEmail(target.value) }
                />
                <Form.Link to={{
                    pathname: ROUTES.SIGN_UP + '/#',
                    state: {
                        prop_email: email
                    }
                }}>
                    <OptForm.Button disabled={ isInvalid(email) }>
                        Experimente agora.
                    </OptForm.Button>
                </Form.Link>

                <OptForm.Break/>

                <OptForm.Text>Pronto para assistir? Escreva seu email para se inscrever</OptForm.Text>
            </OptForm>
        </Accordion>
    );
}