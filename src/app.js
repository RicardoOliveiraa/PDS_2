import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import ScrollToTop from './utils/ScrollToTop'

export default function App() {
  const user = null;
  // const user = {name: 'luiz'}; 
  /*
  const user = {name: 'luiz'};  = usuario logado => browse
  const user = null; = não há um usuario logado => se mantem na page por nao estar logado
 
  */
  return (
  <Router>
    <ScrollToTop />
    <Switch>
      <IsUserRedirect 
        user={user}
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_IN}
        component={Signin}
      >
        
      </IsUserRedirect>

      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_UP}
        component={Signup}
      >
      <Browse />
      </IsUserRedirect>

      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.BROWSE}
      >
        <Browse />
      </IsUserRedirect>

      {/* <ProtectedRoute 
        user={user} 
        path={ROUTES.BROWSE}>
      </ProtectedRoute> */}

      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
    </Switch>
  </Router>
  );
}