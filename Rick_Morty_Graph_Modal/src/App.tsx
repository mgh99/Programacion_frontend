import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Componentes/Container';
import CharactersRM from './Componentes/CharactersRM';
import Pages from './Componentes/Pages';
import Footer from './Componentes/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const App: FC = () => {

  const [page, setPage] = useState(1);

  return (
    <Container>
      <ApolloProvider client={client} >
          <Footer/>
          <CharactersRM page={page} />
          <Pages page={page} otherPage={setPage} />
      </ApolloProvider>
    </Container>
  );
}

export default App;
