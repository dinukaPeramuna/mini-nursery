import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import type{ Plant } from './types'

const plants: Plant[] = [
  {
    id: 1,
    name: "Aloe Vera",
    scientific: "Aloe barbadensis miller",
    difficulty: "Easy",
    light: "Bright",
    water: "Low",
    rarity: "Common",
    description: "A succulent plant known for its medicinal properties."
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "A popular indoor plant with large, violin-shaped leaves."
  },
  {
    id: 3,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "A hardy plant that tolerates low light and infrequent watering."
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App plants={plants} />
  </React.StrictMode>,
)
