import { useState } from "react";
import "./App.css";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
function App(){

  const[isGameStarted,setisGameStarted]=useState(false);

  const toggleGameplay=()=>{
    setisGameStarted((prev)=> !prev)
  }
  return <>
  {
    isGameStarted? <GamePlay/> : <StartGame toggle={toggleGameplay}/>
  }
 
  
  </>


}

export default App;
