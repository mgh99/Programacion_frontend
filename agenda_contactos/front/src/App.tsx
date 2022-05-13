import React, { FC } from 'react';
import './App.css';
import Container from './Componentes/Layout/Container';
import Logo from './Componentes/Logo';
import ContainerMenu from './Componentes/Layout/ContainerMenu';
import Agenda from './Componentes/Layout/Agenda';
import AddContact from './Componentes/AddContact';
import UpdateContact from './Componentes/UpdateContact';
import DeleteContact from './Componentes/DeleteContact';
import { ContainerButtonAddContact, ContainerButtonUpContact, ContainerButtonDeltContact } from './Componentes/AddContact';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const App: FC = () => {

  const [viewAddContact, setViewAddContact] = React.useState(false);
  const [viewUpdateContact, setViewUpdateContact] = React.useState(false);
  const [viewDeleteContact, setViewDeleteContact] = React.useState(false);
  const [viewListContactsAZ, setViewListContactsAZ] = React.useState(false);

  console.log(process.env.REACT_APP_API_URL);

  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache()
  });

  return (

    <Container>
      <Logo />

      <ContainerMenu>
        <ContainerButtonAddContact onClick={() => {
          setViewAddContact(true);
          setViewUpdateContact(false);
          setViewDeleteContact(false);
        }}> Add Contact
         </ContainerButtonAddContact>
        <ContainerButtonUpContact onClick={() => {
          setViewAddContact(false);
          setViewUpdateContact(true);
          setViewDeleteContact(false);
        }}>
          Update Contact</ContainerButtonUpContact>
        <ContainerButtonDeltContact onClick={() => {
          setViewAddContact(false);
          setViewUpdateContact(false);
          setViewDeleteContact(true);
        }}>
          Delete Contact</ContainerButtonDeltContact>
          
      </ContainerMenu>

      <ApolloProvider client={client}>
     
        <Agenda>
          {viewAddContact && <AddContact />}
          {viewUpdateContact && <UpdateContact />}
          {viewDeleteContact && <DeleteContact />}
        </Agenda>
      </ApolloProvider>

    </Container>
  );
}

export default App;
