import express, { Router } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import {} from "dotenv/config";
import { randomBytes } from "crypto";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser());
const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(process.env.PORT || 4000, (err) => {
  if (err) console.log(err.message);
  else console.log(`App is listening to port ${process.env.PORT || 4000}`);
});
