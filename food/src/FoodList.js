import React, { useState } from "react"
import 'bulma/css/bulma.css';
import foods from './foods.json';
import formik, { Formik, Field, Form } from 'formik'
import AddFood from "./AddFood"


export default function FoodList() {

    return(
       <div>
          <ul>{foods.map(item=> (
              <li key ={item.id}>
                   <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="{item.image.path}" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <label>Name:</label><strong>{item.name}</strong> <br />
            <label>calories:</label> <small>{item.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" value="1" />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>

              </li>
          ))}</ul> 
        
             </div>
             )
         }
    

         



















        //  return(
        //     <div>
        //        <ul>{foods.map(item=> (
        //            <li key ={item.id}>
        //                <h1>{item.name}</h1>
        //               <p>{item.calories}</p>
        //            </li>
        //        ))}</ul> 
             
        //      </div>
        //           )
        //       }
         
    
       
        
    


