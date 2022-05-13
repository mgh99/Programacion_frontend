import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Componentes/Container';
import CharactersRM from './Componentes/CharactersRM';
import Pages from './Componentes/Pages';
import Header from './Componentes/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const App: FC = () => {

  const [page, setPage] = useState(1);
  //añadido nuevo
  const totalPages = 42;
  const otherPage = (updatePage: number) => setPage(updatePage);

  return (
    <Container>
        <ApolloProvider client={client} >
        <Header/>
          <CharactersRM page={page} />
            <Pages
              page={page}
              totalPages={totalPages}
              otherPage={otherPage}
            />
      </ApolloProvider>
    </Container>
  );
}

export default App;
