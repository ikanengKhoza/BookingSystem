import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AvailableAppointments from "./AvailableAppointments";
import Mentor from "./Mentor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <nav>
              <h1 className="title">Calender App</h1>
              <div className="nav--links">
                <Link
                  to="available"
                  className="button is-success is-outlined home"
                >
                  Dashbord
                </Link>
                <Link
                  to="mentor"
                  className="button is-success is-outlined home"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <div className="content">
          <Routes>
            <Route path="available" element={<AvailableAppointments />} />
            <Route path="mentor" element={<Mentor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
