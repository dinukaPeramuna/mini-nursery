import React from 'react'
import type { Plant } from './types'

interface PlantCardProps {
  plant: Plant
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {

  // Helper functions to show icons
  const getLightIcons = (level: string) => {
    switch(level) {
      case 'Low': return '💡';
      case 'Medium': return '💡💡';
      case 'Bright': return '💡💡💡';
      default: return '';
    }
  }

  const getWaterIcons = (level: string) => {
    switch(level) {
      case 'Low': return '💧';
      case 'Moderate': return '💧💧';
      case 'Frequent': return '💧💧💧';
      default: return '';
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{plant.name}</h5>
        {plant.scientific && (
          <h6 className="card-subtitle mb-2 text-muted fst-italic">{plant.scientific}</h6>
        )}
        <p className="card-text">{plant.description}</p>
        <div className="mb-2">
          <span className="badge bg-primary me-1">{plant.difficulty}</span>
          {plant.rarity && <span className="badge bg-success">{plant.rarity}</span>}
        </div>
        <div className="mb-2">
          <strong>Light: </strong>{getLightIcons(plant.light)}
        </div>
        <div className="mb-3">
          <strong>Water: </strong>{getWaterIcons(plant.water)}
        </div>
        <button className="btn btn-outline-primary me-2" disabled>View</button>
        <button className="btn btn-outline-success" disabled>Buy</button>
      </div>
    </div>
  )
}

export default PlantCard
