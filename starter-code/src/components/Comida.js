import React from 'react'
 const Comida = ({name, calories,image,quantity,mult})=>{
    
    
    return(
        <li>
        {quantity},{name}= {mult}
        
      </li>
     )
}
 export default Comida;