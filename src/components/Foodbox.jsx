import React from 'react'
import {Button } from "antd"; 

export const Foodbox = ({name, image, calories, serving, borrado}) => {
   
 
  return (
    <div>
     
        <h3>{name}</h3>
        <img src={image} alt={name} width="250px"/>
        <p>{calories}</p>
        <p>{serving}</p>
        <p><strong>Total Calories:</strong>{calories}</p>
        <Button type="submit" onClick={() => {borrado()}}>Delete</Button>
      
    </div>
  )
}
