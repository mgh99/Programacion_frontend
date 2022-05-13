import {gql} from "@apollo/client";

export const GET_CONTACTS_AZ = gql`
    query Query {
        ContactsASC {
            _id,
            name,
            lastNames,
            phone,
            email
        }
    }
`

export const GET_CONTACTS_ZA = gql`
    query Query {
        ContactsDESC {
            _id,
            name,
            lastNames,
            phone,
            email
        }
    }
`
