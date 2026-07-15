import { useState } from "react";



const NumberSelector = ({selectedNumber,setSelectedNumber,error})=>  {
  const arrNumber =[1,2,3,4,5,6];
  
 
return <div> 
    <p>{error}</p>
    {arrNumber.map((value,i)=> (
    <button className="btn2" key={i}
    onClick ={()=>setSelectedNumber(value)}>{value}</button>
    ) )
}
<p>Select number</p>
 </div>


}

export default NumberSelector;