import React from 'react'
import type { Plant } from './types'

interface Props {
  plants: Plant[]
  selectedId: number | null
  onSelect: (id: number) => void
}

const PlantList: React.FC<Props> = ({ plants, selectedId, onSelect }) => {
  return (
    <ul className="list-group">
      {plants.map(plant => (
        <li
          key={plant.id}
          className={
            'list-group-item ' + (selectedId === plant.id ? 'active' : '')
          }
          onClick={() => onSelect(plant.id)}
          style={{ cursor: 'pointer' }}
        >
          <strong>{plant.name}</strong>
          <br />
          <small>{plant.scientific}</small>
        </li>
      ))}
    </ul>
  )
}

export default PlantList
