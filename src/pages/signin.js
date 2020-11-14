import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import api from "../services/api";
import * as ROUTES from '../constants/routes';

export default function SignIn() {

  const user = {
    name: "$2b$08$1j0XveZ1",
    password: "$2b$08$1j0XveZ1",
    email: "$2b$08$1j0XveZ1",
    payment_method: "$2b$08$1j0XveZ1",
    plan: "$2b$08$1j0XveZ1",
  } 



  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();
  };

  const response =  api.post("user/", user)

  console.log('response: ', response)
  console.log('senha: ', user.password)
  console.log(db.listDatabases)

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Entrar</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
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
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Entrar
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Novo na DisneyLand? <Form.Link to="/signup">Registrar-se.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Esta página é protegida por Google reCAPTCHA para garantir que você não o WALL-E. Aprenda mais.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}