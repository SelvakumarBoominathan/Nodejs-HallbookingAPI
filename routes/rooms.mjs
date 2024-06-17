// import express
import express from "express";

//settingup the server for rooms and assign it to a variable
const roomsRouter = express.Router();

//setting initial rooms status

let Rooms = [
  {
    id: 1,
    type: "A/C",
    size: "Normal",
    availability: "yes",
    price: "1500",
  },
  {
    id: 2,
    type: "non_A/C",
    size: "delux",
    availability: "no",
    price: "1500",
  },
  {
    id: 3,
    type: "non_A/C",
    size: "Normal",
    availability: "yes",
    price: "1000",
  },
  {
    id: 4,
    type: "A/C",
    size: "delux",
    availability: "yes",
    price: "2000",
  },
];

// GET - get all rooms
roomsRouter.get("/", (req, res) => {
  res.send(Rooms);
});

//POST - Add new room
roomsRouter.post("/", (req, res) => {
  const { body } = req;
  Rooms.push({ id: Date.now().toString, ...body });
  res.send(Rooms);
});

//PUT - update an existing room
roomsRouter.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { body } = req;

  if (Object.keys(body).length > 0) {
    if (Rooms.some((room) => room.id === id)) {
      const index = Rooms.findIndex((room) => room.id === id);

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
  const id = parseInt(req.params.id);

  if (Rooms.filter((room) => room.id === id).length > 0) {
    Rooms = Rooms.filter((room) => room.id !== id);
    res.send(Rooms);
  } else {
    res.status(404).send({ msg: "Room is not in the list!" });
  }
});

//export this routter to use main server
export default roomsRouter;
