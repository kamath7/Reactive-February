import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Lalle nata");
});
const root = { hello: () => "Hi, It's Kams" };
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
