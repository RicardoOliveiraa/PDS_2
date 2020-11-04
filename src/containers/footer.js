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
                        <Footer.Link href="#">Investor Relations</Footer.Link>
                        <Footer.Link href="#">Ways to OLHAR</Footer.Link>
                        <Footer.Link href="#">Corporate Informations</Footer.Link>
                        <Footer.Link href="#">Netflix Originals</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Central de Ajuda</Footer.Link>
                        <Footer.Link href="#">Jobs</Footer.Link>
                        <Footer.Link href="#">Terms of Uso</Footer.Link>
                        <Footer.Link href="#">Fale conosco</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Conta</Footer.Link>
                        <Footer.Link href="#">Resgatar gift cards</Footer.Link>
                        <Footer.Link href="#">Privacidade</Footer.Link>
                        <Footer.Link href="#">Speed Test</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#">Media Center</Footer.Link>
                        <Footer.Link href="#">Comprar gift card</Footer.Link>
                        <Footer.Link href="#">Cookies Preferences</Footer.Link>
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Break/>
                <Footer.Text>Disneyflix Parque de Orlando</Footer.Text>
        </Footer>
    )
}