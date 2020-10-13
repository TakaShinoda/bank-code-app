import React from 'react'
import './App.css'
import { Cards } from './features/bank/Cards'
import { SelectBank } from './features/bank/SelectBank'


function App() {
  return (
    <div className="App">
      <SelectBank />
      <br/>
      <Cards />
    </div>
  )
}

export default App
