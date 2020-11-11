import React from 'react'
import {Footer} from '../components'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Dúvidas? Fale conosco</Footer.Title>
            <Footer.Break/>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Veja só</Footer.Link>
                        <Footer.Link href="#">Informações corporativas</Footer.Link>
                        <Footer.Link href="#">Originais Disneyflix</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Central de Ajuda</Footer.Link>
                        <Footer.Link href="#">Trampos</Footer.Link>
                        <Footer.Link href="#">Termos de Uso</Footer.Link>
                        <Footer.Link href="#">Fale com nois</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Conta</Footer.Link>
                        <Footer.Link href="#">Resgatar gift cards</Footer.Link>
                        <Footer.Link href="#">Privacidade</Footer.Link>
                        <Footer.Link href="#">Teste de Velocidade</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Media Center</Footer.Link>
                        <Footer.Link href="#">Comprar gift card</Footer.Link>
                        <Footer.Link href="#">Prefêrencia de Cookies</Footer.Link>
                        <Footer.Link href="#">Notícias</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Break/>
                <Footer.Text>Disneyflix Parque de Orlando</Footer.Text>
        </Footer>
    )
}