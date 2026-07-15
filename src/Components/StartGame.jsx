

function StartGame({toggle}){

  return <div className="display"> 
 <div>
    <img src ="/dice.jpg"/>
 
 </div>
<div className="btn">
    <h1>DICE GAME</h1>
    <button onClick={toggle}>Play Now</button>
</div>

  
 </div>


}

export default StartGame;