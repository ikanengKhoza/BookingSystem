import React, { useState, useEffect } from "react";

const AvailableAppointments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/appointments")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <h4>Appointmens</h4>
      {data.map((app) => {
        return (
          <>
            <div>
              <p>{app.firstName}</p>
              <p>{app.lastName}</p>
              <span>{app.appDate}</span>
              <p>at</p>
              <span>{app.appTime}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AvailableAppointments;
