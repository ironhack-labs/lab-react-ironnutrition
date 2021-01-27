import React, {useState} from 'react';


const FoodBox = ({name,image,calories, quantity}) => {
    const [getQuantity, setQuantity] = useState(1);
   function incrementQuantity(){
       setQuantity(quantity+ 1);
   }
    return (
        <div className="Box">
        <div className="media-left">
         <figure className="image is-64x64">
            <img src={image} alt={name}/>
         </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories}</small>
        </p>
      </div>
     </div>
     <div className="media-right">
       <div className="field has-addons">
         <div className="control">
          <input className="input" type="number" value= {getQuantity} style={{color:'black'}}/>
         </div>
         <div className="control">
           <button className="button is-info" onClick={incrementQuantity}>
            +
           </button>
         </div>
       </div>
     </div>
    </div>
    );
  }
export default FoodBox;