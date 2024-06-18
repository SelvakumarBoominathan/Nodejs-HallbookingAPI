// import express
import express from "express";

//import variabledata
import { Rooms } from "./variables.mjs";

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
    if (Rooms.some((room) => room.id === id)) {
      let index = Rooms.findIndex((room) => room.id === id);

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

  if (Rooms.filter((room) => room.id === id).length > 0) {
    Rooms = Rooms.filter((room) => room.id !== id);
    res.send(Rooms);
  } else {
    res.status(404).send({ msg: "Room is not in the list!" });
  }
});

//Booking a Room API Setups

roomsRouter.patch("/book-room/:roomID", (req, res) => {
  const { body } = req;
  const { cus_id } = body;
  const { roomID } = req.params;

  const now = new Date();
  const addedTime = new Date(
    now.getTime() + parseInt(body.stay_duration) * 60 * 60 * 1000
  );

  const formattedNow = now.toLocaleString().split(",");
  let Start_date = period[0];
  let Start_time = period[1];
  const formattedAddedTime = addedTime.toLocaleString().split(",");
  let End_date = period[0];
  let End_time = period[1];

  let index = Rooms.findIndex((room) => room.id === roomID);

  Rooms[index].booked_cus_list.push(cus_id);

  Rooms[index].booking_details.push({
    cus_id: cus_id,
    customer_name: body.customer_name,
    tart_date: Start_date,
    start_Time: Start_time,
    end_date: End_date,
    end_time: End_time,
  });

  res.send({ Msg: "Rooms Booked Successfully!" });
});

//export this routter to use main server
export default roomsRouter;
