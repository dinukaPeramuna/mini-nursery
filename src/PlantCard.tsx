import React from 'react'
import type { Plant } from './types'

interface PlantCardProps {
  plant: Plant | null   // <-- FIXED: allow null
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {

  // If no plant is selected
  if (!plant) {
    return (
      <div className="card mb-3">
        <div className="card-body text-muted">
          Select a plant to view its details.
        </div>
      </div>
    )
  }

  // Icon helpers
  const getLightIcons = (level: string) => {
    switch (level) {
      case 'Low': return '💡'
      case 'Medium': return '💡💡'
      case 'Bright': return '💡💡💡'
      default: return ''
    }
  }

  const getWaterIcons = (level: string) => {
    switch (level) {
      case 'Low': return '💧'
      case 'Moderate': return '💧💧'
      case 'Frequent': return '💧💧💧'
      default: return ''
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">

        <h5 className="card-title">
          {plant.name}{' '}
          {plant.scientific && (
            <small className="text-muted fst-italic">({plant.scientific})</small>
          )}
        </h5>

        <p className="card-text">{plant.description}</p>

        <div className="mb-2">
          <span className="badge bg-primary me-1">{plant.difficulty}</span>
          {plant.rarity && (
            <span className="badge bg-success">{plant.rarity}</span>
          )}
        </div>

        <div className="mb-2">
          <strong>Light: </strong> {getLightIcons(plant.light)}
        </div>

        <div className="mb-3">
          <strong>Water: </strong> {getWaterIcons(plant.water)}
        </div>

        <button className="btn btn-outline-primary me-2" disabled>
          View (UI-only)
        </button>

        <button className="btn btn-outline-success" disabled>
          Buy (UI-only)
        </button>
      </div>
    </div>
  )
}

export default PlantCard
