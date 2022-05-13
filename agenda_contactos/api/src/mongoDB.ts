import {Db, MongoClient, Collection} from 'mongodb';

export const mongoDB = async (): Promise<Db> => {
    
    const monguri: string = "mongodb+srv://mgh99:mariagh99@cluster0.r1qlh.mongodb.net/Maria?retryWrites=true&w=majority" as string;
    const client = new MongoClient(monguri);

    try {
        await client.connect();
        console.info("Connected to MongoDB");
        return client.db("Contacts");
    } catch (error) {
        throw error;
    }
}


//mongodb+srv://mgh99:<password>@cluster0.r1qlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority