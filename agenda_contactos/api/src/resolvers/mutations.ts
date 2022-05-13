import {ApolloError} from "apollo-server";
import {Db, Collection} from "mongodb";

const ObjectId = require('mongodb').ObjectId;

export const Mutation = {
    addContact: async (parent: any, args: {name: string, lastNames: string, phone: number, email: string}, context: {Contacts: Collection}) => {
        
        //si no existe ese contacto por ese telefono
        if(!await context.Contacts.findOne({phone: args.phone})) {
            const newContact = await context.Contacts.insertOne({
                name: args.name,
                lastNames: args.lastNames,
                phone: args.phone,
                email: args.email
            });

            return await context.Contacts.findOne({_id: newContact.insertedId}); //retorna el contacto insertado
        } else {
            throw new ApolloError("El contacto ya existe en la agenda");
        }
    },

    deleteContact: async (parent: any, args: {phone: number}, context: {Contacts: Collection}) => {

        const phoneDeleted = args.phone;
        const deleteContaced = await context.Contacts.findOneAndDelete({phone: phoneDeleted});

        if(deleteContaced.value) {
            return deleteContaced.value;
        }else {
            throw new ApolloError("El contacto no existe en la agenda");
        }

    },

    updateContact: async (parent: any, args: { name: string, lastNames: string, phone: number, email: string}, context: {Contacts: Collection}) => {

        const phoneUpdate = await args.phone;

        {args.name && await context.Contacts.updateOne({phone: phoneUpdate}, {$set: {name: args.name}});}
        {args.lastNames && await context.Contacts.updateOne({phone: phoneUpdate}, {$set: {lastNames: args.lastNames}});}
        {args.email && await context.Contacts.updateOne({phone: phoneUpdate}, {$set: {email: args.email}});}

        const updatedContact2 = await context.Contacts.findOne({phone: args.phone});
    
        //si no existe ese contacto
        if(!updatedContact2) {
            throw new ApolloError("El contacto no existe en la agenda");
        } else {
            return updatedContact2; //retorna el contacto actualizado
        }
    },
}