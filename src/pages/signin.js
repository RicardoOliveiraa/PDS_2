import React, { useState, useContext } from 'react';
import { useHistory, Redirect , useLocation} from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

// import * as ROUTES from '../constants/routes';
import axios from 'axios';

export default function SignIn() {

  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    //https://disney-flix.herokuapp.com/login 
    const user = {
      email:emailAddress,
      password:password
    }
  
    axios
      .post(`https://f01dc703ca63.ngrok.io/login`,  user)
        .then(
          ({ data }) => {
            if (data.success) {
              console.log(data.user)
              localStorage.setItem('user', JSON.stringify(data.user))
              history.push("/browse")
            } else {
              alert("Senha ou email incorreto")
            }
          
          }
        ) 
    event.preventDefault();
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Entrar</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}