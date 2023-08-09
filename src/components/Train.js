import React, { useState } from "react";

const Train = ({ train }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="train-card">
      <h3 onClick={openModal}>{train.name}</h3>
      <p>Timings: {train.timings}</p>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{train.name}</h2>
            <p>{train.description}</p>
            <p>Timings: {train.timings}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Train;
