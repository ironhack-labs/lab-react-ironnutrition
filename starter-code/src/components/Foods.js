import React from 'react'
 const Foods = ({name, calories,image,quantity,mult})=>{
    
    
    return(
        <li>
        {quantity},{name}= {mult}
        
      </li>
     )
}
 export default Foods;