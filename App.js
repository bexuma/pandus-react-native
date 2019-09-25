import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createAppContainer } from "react-navigation";

import NavigationService from "./services/navigation";
import Navigation from "./navigation/navigation";

console.disableYellowBox = true;

const AppContainer = createAppContainer(Navigation);

// const client = new ApolloClient();
const client = new ApolloClient({
  uri: 'https://pandus.herokuapp.com/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
      {/* <ApplicationList /> */}
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </ApolloProvider>
  );

export default App