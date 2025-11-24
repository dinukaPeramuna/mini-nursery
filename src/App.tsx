import React, { useState } from 'react'
import type { Plant } from './types'
import PlantList from './PlantList'
import PlantCard from './PlantCard'
import PlantForm from './PlantForm'
import Banner from './Banner' // make sure the path is correct

interface AppProps {
  plants: Plant[]
}

const App: React.FC<AppProps> = ({ plants }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const selectedPlant = plants.find(p => p.id === selectedId) || null

  return (
    <div className="container mt-4">
      {/* Banner */}
      <Banner>
        <h1>Welcome to the Mini Nursery</h1>
      </Banner>

      {/* Search bar (UI only) */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search plants (UI-only)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {/* LEFT: Plant List */}
        <div className="col-md-4">
          <PlantList
            plants={plants}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <button
            className="btn btn-secondary mt-2"
            onClick={() => setSelectedId(null)}
          >
            Reset Selection
          </button>
        </div>

        {/* RIGHT: Form + Featured Card */}
        <div className="col-md-8">
          <PlantForm />

          <div className="mt-4">
            {selectedPlant ? <PlantCard plant={selectedPlant} /> : null}
          </div>
        </div>
      </div>
    </div> // ✅ closes the outer container div
  )
}

export default App // ✅ export the component
