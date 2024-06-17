// variables for Rooms
let Rooms = [
  {
    id: 1,
    type: "A/C",
    Room_Name: "East",
    size: "Normal",
    availability: "yes",
    price: "1500",
  },
  {
    id: 2,
    Room_Name: "West",
    type: "non_A/C",
    size: "delux",
    availability: "no",
    price: "1500",
  },
  {
    id: 3,
    Room_Name: "North",
    type: "non_A/C",
    size: "Normal",
    availability: "yes",
    price: "1000",
  },
  {
    id: 4,
    Room_Name: "South",
    type: "A/C",
    size: "delux",
    availability: "yes",
    price: "2000",
  },
];

let customers = [
  {
    cus_id: 1,
    Customer_name: "Karthick",
    Date: "11-Jan-2024",
    Booking_details: [
      {
        Room_Name: "South",
        Booking_id: "001",
        Booking_Date: "12-Oct-2023",
        Start_Time: "9",
        End_Time: "15",
        Booking_Status: "Booked",
      },
      {
        Room_Name: "West",
        Booking_id: "002",
        Booking_Date: "10-Dec-2023",
        Start_Time: "9",
        End_Time: "18",
        Booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 2,
    Customer_name: "Mano",
    Date: "11-Jan-2024",
    Booking_details: [
      {
        Room_Name: "East",
        Booking_id: "005",
        Booking_Date: "22-Apr-2023",
        Start_Time: "9",
        End_Time: "15",
        Booking_Status: "Booked",
      },
      {
        Room_Name: "North",
        Booking_id: "003",
        Booking_Date: "22-Jun-2023",
        Start_Time: "9",
        End_Time: "15",
        Booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 3,
    Customer_name: "Siva",
    Date: "11-Jan-2024",
    Booking_details: [
      {
        Room_Name: "South",
        Booking_id: "010",
        Booking_Date: "29-Jul-2024",
        Start_Time: "9",
        End_Time: "15",
        Booking_Status: "Booked",
      },
    ],
  },
  {
    cus_id: 4,
    Customer_name: "Thiru",
    Date: "11-Jan-2024",
    Booking_details: [
      {
        Room_Name: "West",
        Booking_id: "001",
        Booking_Date: "12-Oct-2023",
        Start_Time: "9",
        End_Time: "15",
        Booking_Status: "Booked",
      },
    ],
  },
];

export { Rooms, customers };
