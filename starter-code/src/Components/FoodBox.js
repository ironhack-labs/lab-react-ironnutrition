import React from 'react'

const FoodBox = ( props ) => props.foods.map((food, i) =>(
 <div className="box" key={i}>
 <article className="media">
   <div className="media-left">
     <figure className="image is-64x64">
       <img src={food.image} alt="Food"/>
     </figure>
   </div>
   <div className="media-content">
     <div className="content">
       <p>
         <strong>{food.name}</strong> <br />
         <small>{food.calories}</small>
       </p>
     </div>
   </div>
   <div className="media-right">
     <div className="field has-addons">
       <div className="control">
         <input
           className="input"
           type="number"
           min='0'
         />
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
))


export default FoodBox
