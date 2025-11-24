import React from 'react'
import type { Plant } from './types'

interface PlantListProps {
  plants: Plant[]
  selectedId: number | null
  onSelect: (id: number) => void
}

const PlantList: React.FC<PlantListProps> = ({ plants, selectedId, onSelect }) => {
  return (
    <ul className="list-group">
      {plants.map(plant => (
        <li
          key={plant.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            selectedId === plant.id ? 'active' : ''
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(plant.id)}
        >
          <div>
            <h5 className="mb-1">{plant.name}</h5>
            {plant.scientific && (
              <small className="text-muted fst-italic">{plant.scientific}</small>
            )}
          </div>
          <div className="d-flex gap-1">
            <span className="badge bg-primary">{plant.difficulty}</span>
            {plant.rarity && <span className="badge bg-success">{plant.rarity}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PlantList
