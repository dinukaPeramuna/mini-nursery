import React from 'react'

const PlantForm: React.FC = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Add New Plant</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="plantName" className="form-label">Plant Name</label>
            <input type="text" className="form-control" id="plantName" disabled />
          </div>

          <div className="mb-3">
            <label htmlFor="scientificName" className="form-label">Scientific Name</label>
            <input type="text" className="form-control" id="scientificName" disabled />
          </div>

          <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">Difficulty</label>
            <select className="form-select" id="difficulty" disabled>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="light" className="form-label">Light</label>
            <select className="form-select" id="light" disabled>
              <option>Low</option>
              <option>Medium</option>
              <option>Bright</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="water" className="form-label">Water</label>
            <select className="form-select" id="water" disabled>
              <option>Low</option>
              <option>Moderate</option>
              <option>Frequent</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows={3} disabled></textarea>
          </div>

          <button type="button" className="btn btn-primary me-2" disabled>Add Plant</button>
          <button type="button" className="btn btn-secondary" disabled>Clear</button>
        </form>
      </div>
    </div>
  )
}

export default PlantForm
