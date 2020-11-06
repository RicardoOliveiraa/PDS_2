import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';



export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Filmes ilimitados, programas de TV e muito mais.</Feature.Title>
                    <Feature.SubTitle>Assista em qualquer lugar. Cancele quando quiser.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email" />
                        <OptForm.Button>Experimente Agora</OptForm.Button>
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