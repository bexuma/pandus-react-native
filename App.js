import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ApplicationCreate from './components/application-create'

// const client = new ApolloClient();
const client = new ApolloClient({
  uri: 'https://pandus.herokuapp.com/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
      <ApplicationCreate />
    </ApolloProvider>
  );

export default App