import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apollo';
import { MainRoutes } from 'routes';

import { ToastProvider } from 'contexts/Toast';

export function App() {
  return (
    <ApolloProvider client={client}>
      <ToastProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </ToastProvider>
    </ApolloProvider>
  );
}
