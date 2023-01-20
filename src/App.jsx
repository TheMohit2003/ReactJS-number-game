import React from 'react'
import Header from './components/Header'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App(){

  
  /*
  1)create an array element maker that returns a method .Every method has value , isHeld boolean and an id. //done
  2)create an array maker that returns an array , which uses the above element function maker .//done
  3) use that array and create its hook . Use that hook as a mapping array to generate different die.//done
  4)Every die should have an onClick function that triggers the isHeld property of that array method to change . If false then true , if true then false.
  5)generate another function for the button function that regenrates an entrie array only for those element whose isHeld is false and not change those 
    whose isHeld is true.
  6)Create an React.useEffect hook which checks evrytime (have the array has dependency) wheather all of the element have true isHeld.
    If yes , then change the button name to Reload game else let the button be Roll.  
  */


  const[array,setArray]=React.useState(generateDieArray());
  const[win,setWin]=React.useState(false);

  //the function generateDie generates a die method.
  function generateDie(){
    return {
      value : Math.floor(Math.random()*6)+1,
      isHeld : false,
      id:nanoid()
    }
  }
  //the function generateDieArray generates an array of the 10 objects and each object
  //is created using generateDie function.
  function generateDieArray(){
    const a = [];
    for(let i = 0 ; i<10 ; i++){
      a.push(generateDie())
    }
    return a
  }

  //the following function is triggered when a die is clicked.
  function handleDieClick(item){
    setArray( array.map(Object=>({
      ...Object,
      isHeld:item.id==Object.id?!Object.isHeld:Object.isHeld
     })))
  } 
  
  //the below function called buttonClickHandler is triggered when the button is clicked.
  function buttonClickHandler(){
    const newArray = array.map(Object=>{
      if(Object.isHeld==true){
        return Object
      }else{
        return generateDie()
      }
    })
   setArray(newArray);
  }
  //the below function returns an die element and each having a value of array generated using 
  // generateDieArray function .
  const dieArray = array.map(item=>{
    return <Die value={item.value} click={()=>handleDieClick(item)} key={item.id}/>
  })



  return (
    <div className="App">
    <Header title="Play this game" description="Click the button to roll the dice"/>
      <div className="container">
      {dieArray}
      </div>
      <div className="button-div">
      <button className="button" onClick={buttonClickHandler}>Roll</button>
      </div>
    </div>
  )
}

export default App
