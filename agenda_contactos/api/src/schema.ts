import {gql} from "apollo-server";

export const typeDefs = gql`

    type Contacts {
        _id: String
        name: String!
        lastNames: String!
        phone: Int!
        email: String!
    }

    type Query {
        ContactsASC: [Contacts]
        ContactsDESC: [Contacts]
    }

    type Mutation {
        addContact(name: String!, lastNames: String!, phone: Int!, email: String!): Contacts!
        deleteContact(phone: Int!): Contacts
        updateContact(name: String!, lastNames: String!, phone: Int!, email: String!): Contacts!
    }
`