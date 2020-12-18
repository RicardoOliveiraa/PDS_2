import React, { useState, useContext } from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import * as ROUTES from '../constants/routes';



export default function Home() {
    const [email, setEmail] = useState('');

    const isInvalid = (email) => {
        const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

        return !isValidEmail
    }

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Filmes ilimitados, programas de TV e muito mais.</Feature.Title>
                    <Feature.SubTitle>Assista em qualquer lugar. Cancele quando quiser.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input
                            placeholder="Email"
                            value={email}
                            onChange={ ({ target }) => setEmail(target.value) }
                        />
                        <Form.Link to={{
                            pathname: ROUTES.SIGN_UP,
                            state: {
                                prop_email: email
                            }
                        }}>
                            <OptForm.Button disabled={isInvalid(email)}>
                                Experimente agora.
                            </OptForm.Button>
                        </Form.Link>
                        <OptForm.Break />
                        <OptForm.Text>Pronto para assistir? Escreva seu email para se inscrever</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />

            <FaqsContainer />
            
            <FooterContainer />

        </>
    );
}