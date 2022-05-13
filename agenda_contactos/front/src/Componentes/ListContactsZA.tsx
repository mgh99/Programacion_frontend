import {FC} from 'react';
import { useQuery } from '@apollo/client';
import ContactContain from './ContactContain';
import {ContactZAProps} from './Types/Types';
import { GET_CONTACTS_ZA } from './Types/Query';
import "./Styles/Componentes.css";

const ListContactsZA: FC = () => {

    const {data, loading, error} = useQuery<ContactZAProps>(GET_CONTACTS_ZA, {
        fetchPolicy: 'network-only' //sirve para que no se cargue en cache
    });

    return(
        <div className = "zaContacts">
            {data && <ContactContain Contacts={data?.ContactsDESC}></ContactContain>}
            {loading && <div color = "white" font-size = "30px">Loading...</div>}
            {error && <div color = "white" font-size = "30px">Error...</div>}
        </div>
    )
}

export default ListContactsZA;