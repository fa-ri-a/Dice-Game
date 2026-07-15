

function RoleDice({roleDice,currentDice}){




  return <div className="container"> 
  <div onClick= {roleDice }>

    <img className="img2" src={`/images/dice_${currentDice}.jpeg`}/>
  </div>
  <p> Click on the dice</p>
 </div>


}

export default RoleDice;