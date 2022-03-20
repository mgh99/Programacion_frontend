
import { Db } from "mongodb";
import { getDocuments } from "./populated";
import express from "express";
import { free, people, register } from "./resolver";
const bodyParser = require('body-parser');


const run = async () => {

  const db: Db = await getDocuments();//ya me devuelve la base de datos ya conectada
  const app = express();
  const cors = require('cors')
  app.set("db", db);
  ///Los USE 
  //Pasar body a json entendible
  app.use(cors())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/register", (req, res, next) => {
    if (req.body.email==="") {
      return res.status(409).send("Introduce correo");
    } else {
      next();
    }
  })
  ///GETs ->obtener
  app.get("/people", people);  
  app.post("/register", register);
  app.post("/free", free);

  await app.listen(4000);
};

/// geter & Setter
/// estoy corriendo esto
try {
  run();
} catch (e) {
  console.error(e);
}