import React from 'react'

const PlantForm: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        Add New Plant (UI-only)
      </div>

      <div className="card-body">
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="plantName" className="form-label">Plant Name</label>
              <input type="text" className="form-control" id="plantName" disabled />
            </div>

            <div className="col">
              <label htmlFor="scientificName" className="form-label">Scientific Name</label>
              <input type="text" className="form-control" id="scientificName" disabled />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="difficulty" className="form-label">Difficulty</label>
              <select className="form-select" id="difficulty" disabled>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div className="col">
              <label htmlFor="light" className="form-label">Light</label>
              <select className="form-select" id="light" disabled>
                <option>Low</option>
                <option>Medium</option>
                <option>Bright</option>
              </select>
            </div>

            <div className="col">
              <label htmlFor="water" className="form-label">Water</label>
              <select className="form-select" id="water" disabled>
                <option>Low</option>
                <option>Moderate</option>
                <option>Frequent</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Short Description</label>
            <textarea className="form-control" id="description" rows={3} disabled />
          </div>

          <button type="button" className="btn btn-primary me-2" disabled>Save</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default PlantForm
