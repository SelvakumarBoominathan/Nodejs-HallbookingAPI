//imporing Express server using ES module
import express from "express";

//importing roomsrouter and customersRouter
import roomsRouter from "./routes/rooms.mjs";
import CustomersRouter from "./routes/Customers.mjs";

//create a port
let port = 8000;

//creating server
let server = express();

//creating middleware
server.use(express.json());

// //READ method
// server.get("/", (req, res) => {
//   res.send({ message: "Hello from server!" });
// });

// //POST method
// server.post("/", (req, res) => {
//   let { body } = req;
//   console.log(body);
//   res.send({ message: "Post method created successfully" });
// });

// //PUT method
// server.put("/", (req, res) => {
//   let { body } = req;
//   console.log(body);

//   res.send({ message: "Put method performed successfully" });
// });

// //DELETE method
// server.delete("/", (req, res) => {
//   let { body } = req;
//   console.log(body);
//   res.send({ message: "delete method performed well!" });
// });

//using roomsRouter in the main server
server.use("/rooms", roomsRouter);
server.use("/customer", CustomersRouter);

//creating a server listener
server.listen(port, () => {
  console.log("Server is listening on port : " + port + " " + new Date());
});
