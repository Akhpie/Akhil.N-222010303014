import React, { useState } from "react";
import "./App.css";
import Train2 from "./components/Train2";
import trainData from "./TrainData";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleTrainData from "./SingleTrainData";

const TrainMain = () => {
  const [selectedSingleTrain, setSelectedSingleTrain] = useState(null);

  const handleTrainClick = (SingleTrain) => {
    setSelectedSingleTrain(SingleTrain);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="SingleTrain-list">
          {SingleTrainData.map((SingleTrain) => (
            <Train2
              key={SingleTrain.id}
              SingleTrain={SingleTrain}
              onClick={handleTrainClick}
            />
          ))}
        </div>
        {selectedSingleTrain && (
          <div className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => setSelectedSingleTrain(null)}
              >
                &times;
              </span>
              <h2>{selectedSingleTrain.namee}</h2>
              <p>{selectedSingleTrain.descriptionn}</p>
              <p>{selectedSingleTrain.typeofTrain}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainMain;
