import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import axios from "axios";

import api from "../services/api";
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  // const user = {
  //   name: "$2b$08$1j0XveZ1",
  //   password: "$2b$08$1j0XveZ1",
  //   email: "$2b$08$1j0XveZ1",
  //   payment_method: "$2b$08$1j0XveZ1",
  //   plan: "$2b$08$1j0XveZ1",
  // } 


  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [plan, setplan] = useState('');
  const [payment_method, setpayment_method] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === '' || confirmation === '';

  const handleSignup = (event) => {
    event.preventDefault();
    const user = {
      name: firstName,
      password: password,
      passwordCheck: confirmation,
      email: emailAddress,
      payment_method: payment_method,
      plan: plan,
    };
    
    axios
      .post(`https://disney-flix.herokuapp.com/user`, user)
      .then(res => {
        console.log(res)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
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
             <Form.Input
              type="Nome"
              value={plan}
              autoComplete="off"
              placeholder="Plano"
              onChange={({ target }) => setplan(target.value)}
            />
            <Form.Input
              type="Nome"
              value={payment_method}
              autoComplete="off"
              placeholder="Pagamento"
              onChange={({ target }) => setpayment_method(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Inscrição
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Já é usuário da DisneyFlix? <Form.Link to="/signin">Faça seu login.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não seja um robô.
          <Form.Link to="">Saiba mais.</Form.Link>
          </Form.TextSmall>
          
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}