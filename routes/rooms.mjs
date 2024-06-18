// import express
import express from "express";

//import variabledata
import { Rooms } from "./variables.mjs";

// const Rooms = require("./variables.js");

//settingup the server for rooms and assign it to a variable
let roomsRouter = express.Router();

//setting initial rooms status

// GET - get all rooms
roomsRouter.get("/", (req, res) => {
  res.send(Rooms);
});

//POST - Add new room
roomsRouter.post("/", (req, res) => {
  let { body } = req;
  Rooms.push({ id: Date.now().toString, ...body });
  res.send(Rooms);
});

//PUT - update an existing room
roomsRouter.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let { body } = req;

  if (Object.keys(body).length > 0) {
    if (Rooms.some((room) => parseInt(room.id) === id)) {
      let index = Rooms.findIndex((room) => parseInt(room.id) === id);

      Rooms[index] = { ...body, id: id };
      res.send(Rooms);
    } else {
      res.status(404).send({ msg: "no data available" });
    }
  } else {
    res.status(400).send({ message: "Please Enter Data to modify." });
  }
});

//DELETE - Remove the room from the list

roomsRouter.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let filtered_room = Rooms.filter((room) => parseInt(room.id) === id);

  if (filtered_room.length > 0) {
    let newRoomsList = Rooms.filter((room) => parseInt(room.id) !== id);
    // added to the new list. since it is not aloowing to reassigned in module export
    res.send(newRoomsList);
  } else {
    res.status(404).send({ msg: "Room is not in the list!" });
  }
});

//Booking a Room API Setups

roomsRouter.patch("/book-room/:roomID", (req, res) => {
  const { body } = req;
  const { cus_id, customer_name, stay_duration, date } = body; //Data format in body is given in payload-patch.js
  const { roomID } = req.params;

  if (!cus_id || !customer_name || !stay_duration || !date) {
    return res
      .status(400)
      .send({ Msg: "Please provide all necessary booking details." });
  }

  const now = new Date(date); // Using given date

  //calculating vacate time
  const addedTime = new Date(
    now.getTime() + parseInt(stay_duration) * 60 * 60 * 1000
  );

  const formattedNow = now.toLocaleString().split(", ");

  //destructuring array to get start date & time
  const [Start_date, Start_time] = formattedNow;

  //destructuring array to get end date & time
  const formattedAddedTime = addedTime.toLocaleString().split(", ");
  const [End_date, End_time] = formattedAddedTime;

  let index = Rooms.findIndex((room) => room.id === roomID.toString());

  // handling no room condition
  if (index === -1) {
    return res.status(404).send({ Msg: "Room not found." });
  }

  // Check if the room is already booked
  if (Rooms[index].status === "Booked") {
    return res.status(400).send({ Msg: "Room is already booked." });
  }

  // if (!Rooms[index].booked_cus_list) {
  //   Rooms[index].booked_cus_list = [];
  // }

  // if (!Rooms[index].booking_details) {
  //   Rooms[index].booking_details = [];
  // }

  Rooms[index].booked_cus_list.push(cus_id);

  //changing room status to booked
  Rooms[index].status = "Booked";

  //Assigning details from reqbody and calculation
  Rooms[index].booking_details.push({
    cus_id: cus_id,
    customer_name: customer_name,
    start_date: Start_date,
    start_time: Start_time,
    end_date: End_date,
    end_time: End_time,
  });

  res.send({ Msg: "Room booked successfully!" });
});

//export this routter to use main server
export default roomsRouter;
