import React, {FC} from 'react';
import logo from './logo.svg';
import Main from './Componentes/Main';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const App: FC = () => {

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client = {client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;

