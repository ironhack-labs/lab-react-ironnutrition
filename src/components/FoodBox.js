import React from 'react'
import 'bulma/css/bulma.css' 
import { useState,useEffect } from 'react';


function FoodBox(props){

    const [count,setCount] = useState(0)
    const [title,setTitle] = useState()

    const onPressCount = (value)=>{
        if(value === 1){
          setCount(prevState => prevState + 1)
        }else{
          setCount(prevState => prevState - 1)
        }
      }

      
return(

    
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={count} onClick={()=>onPressCount(1)}/>
          
        </div>
        <div className="control">
          <button className="button is-info">
            
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
)
}

export default FoodBox

