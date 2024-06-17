// import express
import express from "express";

//settingup the server for rooms and assign it to a variable
const roomsRouter = express.Router();

//setting initial rooms status

let Rooms = [
  {
    room_number: 1,
    type: "A/C",
    size: "Normal",
    availability: "yes",
    price: "1500",
  },
  {
    room_number: 2,
    type: "non_A/C",
    size: "delux",
    availability: "no",
    price: "1500",
  },
  {
    room_number: 3,
    type: "non_A/C",
    size: "Normal",
    availability: "yes",
    price: "1000",
  },
  {
    room_number: 4,
    type: "A/C",
    size: "delux",
    availability: "yes",
    price: "2000",
  },
];

// GET - get all rooms
roomsRouter.get("/", (req, res) => {
  res.send({ Rooms });
});

//POST - Add new room
roomsRouter.post("/", (req, res) => {
  const { body } = req;
  Rooms = Rooms.push({ id: Date.now().toString, ...body });
  res.send({ Rooms });
});

//PUT - update an existing room
roomsRouter.put("/:roomnum", (req, res) => {
  const roomnum = req.params;
  const { body } = req;

  if (Object.keys(body).length > 0) {
    const index = Rooms.indexOf((room) => room.room_number === roomnum);

    Rooms[index] = { ...body, room_number: roomnum };
    res.send({ Rooms });
  } else {
    res.status(400).send({ message: "Please Enter Data to modify." });
  }
});

//DELETE - Remove the room from the list

roomsRouter.delete("/:roomnum", (req, res) => {
  const roomnum = req.params;

  if (Rooms.filter((room) => room.room_number === roomnum).length > 0) {
    Rooms = Rooms.filter((room) => room.room_number !== roomnum);
    res.send({ Rooms });
  } else {
    res.status(400).send({ msg: "Room is anot in the list!" });
  }
});

//export this routter to use main server
export default { roomsRouter };
