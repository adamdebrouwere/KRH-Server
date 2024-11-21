import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
dotenv.config();

import initKnex from "knex";
import configuration from "./knexfile.js";
const knex = initKnex(configuration);

const app = express();
const { PORT } = process.env;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database('KRH-Data.db', (error) => {
    if (error) {
        console.error('Error opening Dataase:', error.message);
    } else {
        console.log('Connected to the db');
    }
})


app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
  });