import React, { useState } from "react";
import "./App.css";
import Train from "./components/Train";
import trainData from "./TrainData";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TrainMain = () => {
  const [selectedTrain, setSelectedTrain] = useState(null);

  const handleTrainClick = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="train-list">
          {trainData.map((train) => (
            <Train key={train.id} train={train} onClick={handleTrainClick} />
          ))}
        </div>
        {selectedTrain && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedTrain(null)}>
                &times;
              </span>
              <h2>{selectedTrain.name}</h2>
              <p>{selectedTrain.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainMain;
