import React, { useState } from "react";

const Train2 = ({ SingleTrain }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="train-card">
      <h3 onClick={openModal}>{SingleTrain.namee}</h3>
      <p>Timings: {SingleTrain.timingss}</p>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{SingleTrain.namee}</h2>
            <p>{SingleTrain.descriptionn}</p>
            <p>Timings: {SingleTrain.timingss}</p>
            <p style={{ fontWeight: "bold" }}>
              Type of Train: {SingleTrain.typeofTrain}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Train2;
