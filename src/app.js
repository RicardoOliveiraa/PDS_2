import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
  const user = null;
  /*
  const user = {name: 'luiz'}; = usuario logado => browse
  const user = null; = não há um usuario logado => se mantem na page por nao estar logado
 
  */
  return (
  <Router>
      <IsUserRedirect 
      user={user}
      loggedInPath={ROUTES.BROWSE} 
      path={ROUTES.SIGN_IN}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect 
      user={user} 
      loggedInPath={ROUTES.BROWSE} 
      path={ROUTES.SIGN_UP}>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute 
      user={user} 
      path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} 
      loggedInPath={ROUTES.BROWSE} 
      path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
  </Router>
  );
}