import React, { useState, useContext } from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { Header } from '../components'
import { Profiles } from '../components'
import { Container, Title, List, Item, Picture, Name, Manage, Delete } from '../components/manage-profiles/styles/manage-profiles';
import { Form } from '../components';
import axios from 'axios'



//Name, seen_movies, liked_categorys
export function ManageProfile({ user, setProfile }) {
    console.log("nao é que passamos pra ca?", setProfile)
    const profiles = user.profile_users.map((user) =>
        <Profiles.List>
            <Profiles.User
                onClick={
                    () =>
                        setProfile(
                            {
                                displayName: user.name,
                                photoURL: user.picture,
                            }
                        )
                }
                data-testid="user-profile"
            >
                <Profiles.Picture src={user.picture} />
                <Profiles.Name> {user.name} </Profiles.Name>
            </Profiles.User>
            <Profiles.Delete />
        </Profiles.List>
    )



    const [firstName, setFirstName] = useState('');


    const isInvalid = firstName === '';

    const handleNewuser = (event) => {
        const user = {
            name: firstName,
        };
    }

    return (

        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Cadastre-se</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="Nome"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Senha"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={confirmation}
                            autoComplete="off"
                            placeholder="Confirme a senha"
                            onChange={({ target }) => setConfirmation(target.value)}
                        />
                        {/* <Form.Input
                  type="text"
                  value={plan}
                  autoComplete="off"
                  placeholder="Plano"
                  onChange={({ target }) => setplan(target.value)}
                /> */}


                        <Select
                            styles={customStyles}
                            options={paymentOptions}
                            placeholder="Pagamento"
                            onChange={({ value }) => setPaymentMethod(value)}

                        />

                        <Select
                            styles={customStyles}
                            options={planOptions}
                            placeholder="Plano"
                            onChange={({ value }) => setplan(value)}
                        />

                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                            Cadastrar-se
                </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Já é usuário da DisneyFlix? <Form.Link to="/signin">Faça seu login.</Form.Link>
                    </Form.Text>

                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default ManageProfile