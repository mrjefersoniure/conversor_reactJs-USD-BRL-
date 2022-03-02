import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Conversor from './components/Conversor'
function App() {
  return (
    <div className="App">
      <h2>Conversor de Moeda</h2>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  )
}

export default App
