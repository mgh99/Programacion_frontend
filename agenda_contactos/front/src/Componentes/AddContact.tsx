import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import Agenda from './Layout/Agenda';
import { ADD_CONTACT } from './Types/Mutation';
import ListContactsAZ from './ListContactsAZ';
import ListContactsZA from './ListContactsZA';
import "./Styles/Componentes.css";
import styled from '@emotion/styled';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const AddContact: FC = () => {

    const [addContact, { data, loading, error }] = useMutation(ADD_CONTACT);

    const [name, setName] = useState<string>('');
    const [lastNames, setLastNames] = useState<string>('');
    const [phone, setPhone] = useState<number>();
    const [email, setEmail] = useState<string>('');

    const [viewListContactsAZ, setViewListContactsAZ] = React.useState(false);
    const [viewListContactsZA, setViewListContactsZA] = React.useState(false);

    const client = new ApolloClient({
        uri: process.env.REACT_APP_API_URL,
        cache: new InMemoryCache()
    });

    return (
        <div className="addContact">

            <div className="botonAnadir">
                <ContainerInfo1>
                    <div className="infoadd">
                        <label>Name</label>
                        <InputInfo type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}></InputInfo>
                    </div>
                    <div className="infoadd">
                        <label>Last Names</label>
                        <InputInfo type="text" value={lastNames} onChange={(e) => {
                            setLastNames(e.target.value)
                        }}></InputInfo>
                    </div>
                    <div className="infoadd">
                        <label>Phone</label>
                        <InputInfo type="text" value={phone} onChange={(e) => {
                            setPhone(parseInt(e.target.value))
                        }}></InputInfo>
                    </div>
                    <div className="infoadd">
                        <label>Email</label>
                        <InputInfo type="text" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}></InputInfo>
                    </div>
                </ContainerInfo1>

                <button className="btn-contact-new" onClick={() =>
                    addContact({
                        variables: { name, lastNames, phone, email }
                    })}>Add new contact</button>
            </div>

            {data && <ContactDiv>
                <div className="info" id="name">
                    {data.addContact.name}
                    {" "}
                    {data.addContact.lastNames}
                </div>
                <div className="info" id="phone">
                    {data.addContact.phone}
                </div>
                <div className="info" id="email">
                    {data.addContact.email}
                </div>
            </ContactDiv>}

            <div className="filter">
                <ContainerButtonAddContact onClick={() => {
                    setViewListContactsAZ(true);
                    setViewListContactsZA(false);
                }}>Order A-Z</ContainerButtonAddContact>
                <ContainerButtonAddContact onClick={() => {
                    setViewListContactsAZ(false);
                    setViewListContactsZA(true);
                }}>Order Z-A</ContainerButtonAddContact>
                <label>  </label>
                <label id="word-filter">Filter: </label>
            </div>

            <ApolloProvider client={client}>
                <Agenda>
                    {viewListContactsAZ && <ListContactsAZ />}
                    {viewListContactsZA && <ListContactsZA />}
                </Agenda>
            </ApolloProvider>

            {loading && <div color = "white" font-size = "30px">Loading...</div>}
            {error && <div color = "white" font-size = "30px">Error </div>}
        </div>
    )
}

export default AddContact;

export const ContainerButtonAddContact = styled.button`
    background-color: #681939;
    border: none;
    color: black;
    font-size: 25px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    :hover {
        background-color: #B82E4F;
    }
`

export const ContainerButtonUpContact = styled.button`
    background-color: #21132D;
    border: none;
    color: black;
    font-size: 25px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    :hover {
        background-color: #41506F;
    }

`

export const ContainerButtonDeltContact = styled.button`
    background-color: #26495C;
    border: none;
    color: black;
    font-size: 25px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    :hover {
        background-color: #326C7A;
    }

`

export const ContainerInfo1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background-color:#b82e4e89;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color:#b82e4eb1;
    }
`

export const ContainerInfo2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background-color:#21132da3;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color:#41205e;
    }
`

export const ContainerInfo3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background-color:#164660a3;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color:#126d9ea2;
    }
`

export const InputInfo = styled.input`
    font-size: 22px;
`

export const ContactDiv = styled.div`

`

/*
<div className="filter">
                <ContainerButtonAddContact onClick={() => {
                    setViewListContactsAZ(true);
                    setViewListContactsZA(false);
                }}>Order A-Z</ContainerButtonAddContact>
                <ContainerButtonAddContact onClick={() => {
                    setViewListContactsAZ(false);
                    setViewListContactsZA(true);
                }}>Order Z-A</ContainerButtonAddContact>
                <label>  </label>
                <label id="word-filter">Filter: </label>
            </div>

            <ApolloProvider client={client}>
                <Agenda>
                    {viewListContactsAZ && <ListContactsAZ />}
                    {viewListContactsZA && <ListContactsZA />}
                </Agenda>
            </ApolloProvider>*/
