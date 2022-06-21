import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apollo';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
