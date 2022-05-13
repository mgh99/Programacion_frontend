import { mongoDB } from "./mongoDB";
import {ApolloServer} from "apollo-server";
import {typeDefs} from "./schema";
import { Mutation } from "./resolvers/mutations";
import { Query } from "./resolvers/query";

const resolvers = {
    Query,
    Mutation
} 

const run = async () => {

    const Contacts = (await mongoDB()).collection("Contacts");
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({req, res}) => {
            if(req.body.query.includes("test")) {
                console.log("ESPERO QUE CON ESTO YA FURRULE"); 
            }
            return{
                Contacts: Contacts
            }
        },
    });

    server.listen(4000).then(() => {
        console.log("Server running on port 4000");
    });
}

try {
    run();
} catch (e) {
    console.log(e);
}