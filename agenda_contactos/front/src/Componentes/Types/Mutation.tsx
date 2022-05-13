import {gql} from "@apollo/client";

export const ADD_CONTACT = gql`
    mutation addContact($name: String!, $lastNames: String!, $phone: Int!, $email: String!) {
        addContact(name: $name, lastNames: $lastNames, phone: $phone, email: $email) {
            name,
            lastNames,
            phone,
            email
        }
    }
`

export const UPDATE_CONTACT = gql`
    mutation updateContact( $name: String!, $lastNames: String!, $phone: Int!, $email: String!) {
        updateContact(name: $name, lastNames: $lastNames, phone: $phone, email: $email) {
            name,
            lastNames,
            phone,
            email
        }
    }
`

export const DELETE_CONTACT = gql`
    mutation deleteContact($phone: Int!) {
        deleteContact(phone: $phone) {
            name,
            lastNames,
            phone,
            email
        }
    }
`