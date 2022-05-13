import {FC} from 'react';
import { useQuery } from '@apollo/client';
import ContactContain from './ContactContain';
import {ContactAZProps} from './Types/Types';
import { GET_CONTACTS_AZ } from './Types/Query';
import styled from '@emotion/styled';
import "./Styles/Componentes.css";

const ListContactsAZ: FC = () => {

    const {data, loading, error} = useQuery<ContactAZProps>(GET_CONTACTS_AZ, {
        fetchPolicy: 'network-only' //sirve para que no se cargue en cache
    });

    console.log(data);

    return(
        <div className = "azContacts">
            
            {data && <ContactContain Contacts={data.ContactsASC}></ContactContain>}
            {loading && <div color = "white" font-size = "30px">Loading...</div>}
            {error && <div color = "white" font-size = "30px">Error...</div>}
        </div>
    )
}

export default ListContactsAZ;

const DivConract = styled.div`
    display: flex;
    flex-direction: column;
    
`