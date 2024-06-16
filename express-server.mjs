//imporing Express server using ES module
import express from "express";

//creating server
const server = express();

//READ method
server.get("/", (req, res) => {
  res.send("<h1>Server Created Successfully!</h1>");
});

//create a port
const port = 8000;

//creating a server listener
server.listen(port, () => {
  console.log("Server is listening on port : " + port + " " + new Date());
});
