import React from "react";
import styled from "styled-components";

const TrainList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TrainItem = styled.li`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const AllTrains = ({ trains, onSelectTrain }) => {
  return (
    <div>
      <h1>All Trains</h1>
      <TrainList>
        {trains.map((train) => (
          <TrainItem key={train.id} onClick={() => onSelectTrain(train.id)}>
            {train.name}
          </TrainItem>
        ))}
      </TrainList>
    </div>
  );
};

export default AllTrains;
