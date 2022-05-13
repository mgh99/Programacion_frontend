import {ApolloError, ApolloServer, gql} from 'apollo-server';
import {Collection, Db} from "mongodb";

export const Query = {

    ContactsASC: async (parent: any, args: any, context: {Contacts: Collection}) => {
        return await context.Contacts.find({}).sort({name: 1}).collation({locale: "en_US", numericOrdering: true}).toArray();
    },

    ContactsDESC: async (parent: any, args: any, context: {Contacts: Collection}) => {
        return await context.Contacts.find({}).sort({name: -1}).collation({locale: "en_US", numericOrdering: true}).toArray();
    },
}