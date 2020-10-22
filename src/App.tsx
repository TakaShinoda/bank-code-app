import React from 'react'
import './App.css'
import { Cards } from './features/bank/Cards'
import { Head } from './features/bank/Head'
import { SelectBank } from './features/bank/SelectBank'


function App() {
  return (
    <div className="App">
      <Head />
      <SelectBank />
      <br/>
      <Cards />
    </div>
  )
}

export default App
