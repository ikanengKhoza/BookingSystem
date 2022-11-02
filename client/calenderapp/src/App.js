import React from "react";
import "bootswatch/dist/lux/bootstrap.css";
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
                <Link to="mentor" className="btn btn-info">
                  Book
                </Link>
                <Link to="available" className="btn btn-light">
                  Dashbord
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
