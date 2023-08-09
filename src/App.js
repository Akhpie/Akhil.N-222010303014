import React, { useState } from "react";
import AllTrains from "./components/AllTrains";
import SingleTrain from "./components/SingleTrain";
import "./App.css";

const App = () => {
  const [trains] = useState([
    { id: 1, name: "Train A", departure: "09:00 AM", arrival: "11:00 AM" },
    { id: 2, name: "Train B", departure: "11:30 AM", arrival: "01:30 PM" },
    { id: 3, name: "Train C", departure: "11:30 AM", arrival: "01:30 PM" },
    { id: 4, name: "Train D", departure: "11:30 AM", arrival: "01:30 PM" },
    { id: 5, name: "Train E", departure: "11:30 AM", arrival: "01:30 PM" },
    { id: 6, name: "Train F", departure: "11:30 AM", arrival: "01:30 PM" },
    { id: 7, name: "Train G ", departure: "11:30 AM", arrival: "01:30 PM" },
  ]);

  const [selectedTrainId, setSelectedTrainId] = useState(null);
  const selectedTrain = selectedTrainId
    ? trains.find((train) => train.id === selectedTrainId)
    : null;

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        <AllTrains trains={trains} onSelectTrain={setSelectedTrainId} />
      </div>
      <div className="container">
        {selectedTrain && <SingleTrain train={selectedTrain} />}
      </div>
    </div>
  );
};

export default App;
