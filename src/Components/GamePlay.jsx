import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import { useState } from "react";

function GamePlay(){
  const [score, setScore]= useState(0)
  const [selectedNumber, setSelectedNumber]= useState()
 const[currentDice,setCurrentDice]=useState()
 const[error , seterror] = useState("")

const generateRandomNumber=(min,max)=> {
  
  return Math.floor(Math.random() * (max- min ) + min);

}
 const reset = () => {
  setScore (0)
 }
const roleDice=() => { 
  if(!selectedNumber){ 
    seterror("YOU HAVE NOT SELECTED ANY NUMBER")
    return;}
    seterror("")
  const randomNumber = generateRandomNumber(1,7) 
setCurrentDice ((prev)=> randomNumber);


if (selectedNumber === randomNumber){
  setScore((prev)=> prev + 2)

}
else {
  setScore((prev)=> prev -2)
}
}

 return <div> 
 <div className="top">
  <TotalScore score={score}/>
  <NumberSelector
  error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
 </div>
<RoleDice currentDice={currentDice} roleDice={roleDice} />

<div>
 <button onClick={reset}>Reset</button>
 <p> how to play the game</p>
  <p>Click any number</p>
  <p></p>
  
  </div>



 </div>


}

export default GamePlay;