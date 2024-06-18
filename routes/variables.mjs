// variables for Rooms
let Rooms = [
  {
    id: "1",
    type: "A/C",
    room_Name: "East",
    size: "Normal",
    status: "Not Booked",
    price: "1500",
    booked_cus_list: [],
    booking_details: [],
  },
  {
    id: "2",
    room_Name: "West",
    type: "non_A/C",
    size: "delux",
    status: "Not Booked",
    price: "1500",
    booked_cus_list: [],
    booking_details: [],
  },
  {
    id: "3",
    room_Name: "North",
    type: "non_A/C",
    size: "Normal",
    status: "Not Booked",
    price: "1000",
    booked_cus_list: [],
    booking_details: [],
  },
  {
    id: "4",
    room_Name: "South",
    type: "A/C",
    size: "delux",
    status: "Not Booked",
    price: "2000",
    booked_cus_list: [],
    booking_details: [],
  },
];

let Customers = [
  {
    cus_id: 1,
    customer_name: "Karthick",
    date: "11-Jan-2024",
    stay_duration: 10,
    booking_details: [
      {
        room_Name: "South",
        booking_id: "001",
        booking_date: "12-Oct-2023",
        start_Time: "9",
        end_Time: "15",
        booking_Status: "Booked",
      },
      {
        room_Name: "West",
        booking_id: "002",
        booking_date: "10-Dec-2023",
        start_Time: "9",
        end_Time: "18",
        booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 2,
    customer_name: "Mano",
    date: "11-Jan-2024",
    stay_duration: 10,
    booking_details: [
      {
        room_Name: "East",
        booking_id: "005",
        booking_date: "22-Apr-2023",
        start_Time: "9",
        end_Time: "15",
        booking_Status: "Booked",
      },
      {
        room_Name: "North",
        booking_id: "003",
        booking_date: "22-Jun-2023",
        start_Time: "9",
        end_Time: "15",
        booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 3,
    customer_name: "Siva",
    date: "11-Jan-2024",
    stay_duration: 10,
    booking_details: [
      {
        room_Name: "South",
        booking_id: "010",
        booking_date: "29-Jul-2024",
        start_Time: "9",
        end_Time: "15",
        booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 4,
    customer_name: "Thiru",
    date: "11-Jan-2024",
    stay_duration: 10,
    booking_details: [
      {
        room_Name: "West",
        booking_id: "001",
        booking_date: "12-Oct-2023",
        start_Time: "9",
        end_Time: "15",
        booking_Status: "Booked",
      },
    ],
  },
];

export { Rooms, Customers };

// module.exports = Customers;

// module.exports = Rooms;
