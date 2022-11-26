import React, { useContext } from 'react';
import ArchiContext from '../../context/archiTour/archiContext';
import BuildingUnit from '../buildings/BuildingUnit';

// function BuildingGrid({buildings}) {
function BuildingGrid() {
  const archiContext = useContext(ArchiContext);

  // import building from archiContext
  const { buildings } = archiContext;
  // console.log(buildings);

  return (
    <div>
      <div style={buildingStyle}>
        {buildings.map((building) => (
          <BuildingUnit key={building._id} building={building} />
        ))}
      </div>
    </div>
  );
}

const buildingStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default BuildingGrid;
