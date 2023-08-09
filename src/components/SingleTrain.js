import React from "react";
import styled from "styled-components";

const TrainInfo = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const SingleTrain = ({ train }) => {
  return (
    <div>
      <h1>Single Train</h1>
      <TrainInfo>
        <h2>{train.name}</h2>
        <p>Departure: {train.departure}</p>
        <p>Arrival: {train.arrival}</p>
      </TrainInfo>
    </div>
  );
};

export default SingleTrain;
