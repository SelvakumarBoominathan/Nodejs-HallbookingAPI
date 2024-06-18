// import express
import express from "express";

//import variabledata
import { Customers } from "./variables.mjs";
// const Customers = require("./variables.js");

//settingup the server for Customers and assign it to a variable
let CustomersRouter = express.Router();

//setting initial Customers status

// GET - get all Customers
CustomersRouter.get("/", (req, res) => {
  res.send(Customers);
});

//POST - Add new customer
CustomersRouter.post("/", (req, res) => {
  let { body } = req;
  Customers.push({ id: Date.now().toString(), ...body });
  res.send(Customers);
});

//PUT - update an existing customer
CustomersRouter.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let { body } = req;

  if (Object.keys(body).length > 0) {
    if (Customers.some((customer) => parseInt(customer.cus_id) === id)) {
      let index = Customers.findIndex(
        (customer) => parseInt(customer.cus_id) === id
      );

      Customers[index] = { ...body, cus_id: id };
      res.send(Customers);
    } else {
      res.status(404).send({ msg: "no data available" });
    }
  } else {
    res.status(400).send({ message: "Please Enter Data to modify." });
  }
});

//DELETE - Remove the customer from the list

CustomersRouter.delete("/:id", (req, res) => {
  let { id } = req.params;

  // Assuming cus_id is a number, convert id to the same type for comparison
  id = parseInt(id); // Convert id to integer if cus_id is numeric

  let filteredCustomer = Customers.filter((customer) => customer.cus_id === id);

  if (filteredCustomer.length > 0) {
    let newCustomersList = Customers.filter(
      (customer) => customer.cus_id !== id
    );
    // Customers = newCustomersList;
    // added to the new list. since it is not aloowing to reassigned in module export
    res.send(newCustomersList);
  } else {
    res.status(400).send({ msg: "Customer is not in the list!" });
  }
});

//export this routter to use main server
export default CustomersRouter;
