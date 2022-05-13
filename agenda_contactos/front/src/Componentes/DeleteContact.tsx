import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from './Types/Mutation';
import "./Styles/Componentes.css";
import { ContainerInfo3, InputInfo, ContactDiv, ContainerButtonDeltContact } from './AddContact';
import ListContactsAZ from './ListContactsAZ';
import ListContactsZA from './ListContactsZA';
import Agenda from './Layout/Agenda';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const DeleteContact: FC = () => {

    const [deleteContact, { data, loading, error }] = useMutation(DELETE_CONTACT);

    const [phoneDelet, setPhoneDelet] = useState<number>();

    const [viewListContactsAZ, setViewListContactsAZ] = React.useState(false);
    const [viewListContactsZA, setViewListContactsZA] = React.useState(false);

    const client = new ApolloClient({
        uri: process.env.REACT_APP_API_URL,
        cache: new InMemoryCache()
    });

    return (
        <div className="deletContact">

            <div className="botonAnadir">
                <ContainerInfo3>
                    <div className="infodelete">
                        <label>Phone: </label>
                        <InputInfo type="text" value={phoneDelet} onChange={(e) => {
                            setPhoneDelet(parseInt(e.target.value))
                        }}></InputInfo>
                    </div>

                </ContainerInfo3>

                <button className="btn-contact-new3" onClick={() => {
                    console.log(phoneDelet);
                    deleteContact({
                        variables: {
                            phone: phoneDelet
                        }
                    })
                }}>Delete Contact</button>
            </div>

            {data && <ContactDiv>
                <div className="info" id="name">
                    {data.deleteContact.name}
                    {" "}
                    {data.deleteContact.lastNames}
                </div>
                <div className="info" id="phone">
                    {data.deleteContact.phone}
                </div>
                <div className="info" id="email">
                    {data.deleteContact.email}
                </div>
            </ContactDiv>}

            <div className="filter">
                <ContainerButtonDeltContact onClick={() => {
                    setViewListContactsAZ(true);
                    setViewListContactsZA(false);
                }}>Order A-Z</ContainerButtonDeltContact>
                <ContainerButtonDeltContact onClick={() => {
                    setViewListContactsAZ(false);
                    setViewListContactsZA(true);
                }}>Order Z-A</ContainerButtonDeltContact>
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

export default DeleteContact;

/* {data && <ContactDiv>
                <div className="info" id="name">
                    {data.deleteContact.name}
                    {" "}
                    {data.deleteContact.lastNames}
                </div>
                <div className="info" id="phone">
                    {data.deleteContact.phone}
                </div>
                <div className="info" id="email">
                    {data.deleteContact.email}
                </div>
            </ContactDiv>}*/ 