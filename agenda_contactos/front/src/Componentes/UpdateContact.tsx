import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_CONTACT } from './Types/Mutation';
import ListContactsAZ from './ListContactsAZ';
import ListContactsZA from './ListContactsZA';
import { ContainerInfo2, InputInfo, ContactDiv, ContainerButtonUpContact } from './AddContact';
import "./Styles/Componentes.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Agenda from './Layout/Agenda';

const UpdateContact: FC = () => {

    const [UpdateContact, { data, loading, error }] = useMutation(UPDATE_CONTACT);

    const [name, setName] = useState<string>('');
    const [lastNames, setLastNames] = useState<string>('');
    const [phoneUpdate, setPhoneUpdate] = useState<number>();
    const [email, setEmail] = useState<string>('');

    const [viewListContactsAZ, setViewListContactsAZ] = React.useState(false);
    const [viewListContactsZA, setViewListContactsZA] = React.useState(false);

    const client = new ApolloClient({
        uri: process.env.REACT_APP_API_URL,
        cache: new InMemoryCache()
    });

    return (
        <div className="updateContact">

            <div className="botonAnadir">
                <ContainerInfo2>
                    <div className="infoupdate">
                        <label>Name</label>
                        <InputInfo type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}></InputInfo>
                    </div>
                    <div className="infoupdate">
                        <label>Last Names</label>
                        <InputInfo type="text" value={lastNames} onChange={(e) => {
                            setLastNames(e.target.value)
                        }}></InputInfo>
                    </div>
                    <div className="infoupdate">
                        <label>Phone</label>
                        <InputInfo type="text" value={phoneUpdate} onChange={(e) => {
                            setPhoneUpdate(parseInt(e.target.value))
                        }}></InputInfo>
                    </div>
                    <div className="infoupdate">
                        <label>Email</label>
                        <InputInfo type="text" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}></InputInfo>
                    </div>
                </ContainerInfo2>

                <button className="btn-contact-new2" onClick={() =>
                    UpdateContact({
                        variables: {
                            name, lastNames, phone: phoneUpdate, email
                        }
                    })}>Update Contact</button>
            </div>

            {data && <ContactDiv>
                <div className="info" id="name">
                    {data.updateContact.name}
                    {" "}
                    {data.updateContact.lastNames}
                </div>
                <div className="info" id="phone">
                    {data.updateContact.phone}
                </div>
                <div className="info" id="email">
                    {data.updateContact.email}
                </div>
            </ContactDiv>}

            <div className="filter">
                <ContainerButtonUpContact onClick={() => {
                    setViewListContactsAZ(true);
                    setViewListContactsZA(false);
                }}>Order A-Z</ContainerButtonUpContact>
                <ContainerButtonUpContact onClick={() => {
                    setViewListContactsAZ(false);
                    setViewListContactsZA(true);
                }}>Order Z-A</ContainerButtonUpContact>
                <label>  </label>
                <label id="word-filter">Filter: </label>
            </div>
                {console.log(data)}
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

export default UpdateContact;

