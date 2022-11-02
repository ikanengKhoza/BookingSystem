const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3001;

const appointmentsData = [
  {
    appId: "1",
    firstName: "Beyoncé",
    lastName: "Lemonade",
    appDate: "15.12.1968",
    appTime: "15:00",
  },

  {
    appId: "2",
    firstName: "Laura",
    lastName: "Smith",
    appDate: "04.11.2022",
    appTime: "13:00",
  },

  {
    appId: "3",
    firstName: "Preston",
    lastName: "Bailey",
    appDate: "15.12.2022",
    appTime: "12:00",
  },
];

app.get("/appointments", (req, res) => {
  res.send(appointmentsData);
});

app.listen(port, function () {
  console.log("Server is listening on port. Ready to accept requests!");
});
