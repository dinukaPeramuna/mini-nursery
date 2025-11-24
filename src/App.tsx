import React, { useState } from 'react'
import type { Plant } from './types'
import PlantList from './PlantList'
import PlantCard from './PlantCard'
import PlantForm from './PlantForm'

interface AppProps {
  plants: Plant[]
}

const App: React.FC<AppProps> = ({ plants }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // UI-only search input (NO filtering)
  const [searchTerm, setSearchTerm] = useState('')

  const selectedPlant = plants.find(p => p.id === selectedId) || null

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Mini Nursery</h1>

      {/* Search input (UI-only) */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search plants... (UI only)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        
        {/* LEFT column: PlantList */}
        <div className="col-md-4">
          <PlantList
            plants={plants}   // NOT filtered — requirement
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* RIGHT column: PlantForm + featured PlantCard */}
        <div className="col-md-8">
          <PlantForm />

          <div className="mt-4">
            <PlantCard plant={selectedPlant} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
