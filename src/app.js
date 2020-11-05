import React from 'react';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import { FaqsContainer } from './containers/faqs';
import * as ROUTES from './constants/routes';

export default function App() {
  return( <>
  <JumbotronContainer />
  <FaqsContainer />
  <FooterContainer />
  </>
  )
}


