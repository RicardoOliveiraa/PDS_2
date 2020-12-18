import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import Select from 'react-select';
import axios from "axios";

import api from "../services/api";
import * as ROUTES from '../constants/routes';

const planOptions = [
  { value: 'Básico', label: 'Básico' },
  { value: 'Padrão', label: 'Padrão' },
  { value: 'Premium', label: 'Premium' }
]

const paymentOptions = [
  {
    value: 'billet', label: 'Boleto'
  },
  {
    value: 'credit_card', label: 'Cartão de crédito'
  },
  {
    value: 'picpay', label: 'Pic Pay'
  }
]



const SignUp = (props) =>  {
  const prop_email = props.location.state
    ? props.location.state.prop_email
    : ''
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState(prop_email);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [plan, setplan] = useState('');
  const [payment_method, setPaymentMethod] = useState('');
  const [error, setError] = useState('');
  
  const isInvalid = firstName === '' || emailAddress === '' || password === '' || confirmation === '';

  const handleSignup = (event) => {
    console.log("plan aqui", plan);
    event.preventDefault();
    const user = {
      name: firstName,
      password,
      passwordCheck: confirmation,
      email: emailAddress,
      payment_method,
      plan: plan,
    };

      const isValidEmail = emailAddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if (isValidEmail) {
      axios
        .post(`https://disney-flix.herokuapp.com/user`, user)
        .then(
          ({ data }) => {
            console.log(data)
            if(data.success) {
              alert("Conta criada com sucesso")
              history.push("/signin")
            } else {
              const message = data.message
              alert(message ? message : "Aconteceu algum erro na criação da sua conta")
            }
        })
    } else {
      alert("Email com formato inválido")
    }
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
              value={ emailAddress }
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
            options = {paymentOptions}
            placeholder = "Pagamento"
            onChange={({ value }) => setPaymentMethod(value)}
            />

            <br></br>
            <Select
            options = {planOptions}
            placeholder = "Plano"
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

export default SignUp