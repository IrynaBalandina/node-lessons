import express from "express";

import movies from "./db/movies.js";

const app = express();

// app.set("json spaces", 4);

app.get("/movies", (req, res)=> {
  const databaseResponse = null;
  res.json(databaseResponse);
  // res.send(databaseResponse);
  // res.send(movies);
   res.json(movies);

})

app.listen(3000, ()=> console.log("Server running on 3000 port"));