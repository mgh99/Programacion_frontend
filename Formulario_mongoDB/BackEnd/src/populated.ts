import { Db, MongoClient } from "mongodb";

export const getDocuments = async (): Promise<Db> => {
  const dbName: string = "Practica4";
  const collection: string = "People";
/*
  const usr = "avalero";
  const pwd = "******";
  const mongouri: string = `mongodb+srv://${usr}:${pwd}@cluster-nebrija.gcxdd.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
*/
const mongouri:string="mongodb+srv://SantiNebrija:Tiburon5050111@basedatosprogra.gli9m.mongodb.net/Santiago?retryWrites=true&w=majority";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    console.info("MongoDB connected");
      return client.db(dbName);
  } catch (e) {
    throw e;
  }
};