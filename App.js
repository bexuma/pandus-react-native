import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

// const client = new ApolloClient();
const client = new ApolloClient({
  uri: 'https://pandus.herokuapp.com/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
    </ApolloProvider>
  );

export default App