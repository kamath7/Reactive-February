require('dotenv').config();
import express from "express";
// import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import {schema} from "./data/schema";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Lalle nata");
});
// const root = { hello: () => "Hi, It's Kams" };

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
