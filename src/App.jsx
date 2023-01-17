import React from 'react'
import Header from './components/Header'
import Die from './components/Die'

function App(){

  function arrayGenerator(numbers,range){  //this function generated a random number array
    const a = [];
    for(let i  = 0 ; i<numbers ; i++){
      const b = Math.floor(Math.random()*range)+1;
      a.push(b);
    }
    return a;
  }

const [array , setArray]=React.useState(arrayGenerator(10,7))

 function clickHandler(){
    setArray(arrayGenerator(10,7))
  }

  const dieArray = array.map(item=>{
    return <Die value={item} />
  })

  return (
    <div className="App">
    <Header title="Play this game" description="Click the button to roll the dice"/>
      <div className="container">
      {dieArray}
      </div>
      <div className="button-div">
      <button className="button" onClick={clickHandler}>Roll</button>
      </div>
    </div>
  )
}

export default App
