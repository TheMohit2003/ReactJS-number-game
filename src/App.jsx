import React from 'react'
import Die from './components/Die'


function App() {

  const a = [1,2,3,4,5,6,7,8,9]

  const dices =(a.map(item=>{
    return <Die value={item} />
  }))
  
  return (
    <div className="App">
      {dices}
    </div>
  )
}

export default App
