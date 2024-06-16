//imporing Express server using ES module
import express from "express";

//create a port
const port = 8000;

//creating server
const server = express();

//creating middleware
server.use(express.json());

//READ method
server.get("/", (req, res) => {
  res.send({ message: "Hello from server!" });
});

//POST method
server.post("/", (req, res) => {
  const { body } = req;
  res.send("<h1>Post method created successfully</h1>"+ `${body}`);
});

//creating a server listener
server.listen(port, () => {
  console.log("Server is listening on port : " + port + " " + new Date());
});
