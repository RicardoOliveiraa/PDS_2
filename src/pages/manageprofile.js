import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import Select from 'react-select';
import api from "../services/api";
import * as ROUTES from '../constants/routes';

const ManageProfile = (props) => {
    const prop_email = props.location.state
        ? props.location.state.prop_email
        : ''
    const history = useHistory();
    const [monieName, setmonieName] = useState('');
    const [emailAddress, setEmailAddress] = useState(prop_email);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = monieName === '' || emailAddress === '' || password === '';

    const handleManageProfile = (event) => {
        event.preventDefault();
        const user = {
            name: monieName,
            password,
            email: emailAddress,

        };
    };








    return (

        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Manda um Filminho ai pf</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleManageProfile} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="Nome do Filme"
                            value={monieName}
                            onChange={({ target }) => setmonieName(target.value)}
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
