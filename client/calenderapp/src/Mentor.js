import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Time from "./Time.js";

function Appointments() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div >
      <div>
        <p>Selected date: {date.toString()}</p>
        <Time showTime={showTime} date={date} />
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>
    </div>
  );
}

export default Appointments;
