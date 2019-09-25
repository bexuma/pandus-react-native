import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ApplicationCreate from './components/application-create'
import ApplicationList from './components/application-list'

// const client = new ApolloClient();
const client = new ApolloClient({
  uri: 'https://pandus.herokuapp.com/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
      <ApplicationList />
    </ApolloProvider>
  );

export default App