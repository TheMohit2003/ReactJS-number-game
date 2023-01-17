import React from 'react'
import Header from './components/Header'
import Die from './components/Die'




function App(){
  return (
    <div className="App">
    <Header title="Play this game" description="Click the button to roll the dice"/>
      <div className="container">
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      <Die value="1"/>
      </div>
      <div className="button-div">
      <button className="button">Roll</button>
      </div>
    </div>
  )
}

export default App
