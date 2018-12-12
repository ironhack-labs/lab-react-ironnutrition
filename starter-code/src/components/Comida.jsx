import React from 'react'

const Comida = ({name, calories,image,quantity})=>{
    
    
    return(
        <li>
        {quantity},{name}= {calories}*{quantity}
        
      </li>

    )
}

export default Comida;