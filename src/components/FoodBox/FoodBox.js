import React from 'react';

function FoodBox(props) {

  const [quantity, setQuantity] = React.useState(1);


  const handleChange = ({ target }) => {
    setQuantity(target.value);
};

const handleCLick = ({ target }) => {
  
  props.setFoodOrder((prev)=>prev.concat({name:props.name, calories: props.calories, quantity: quantity}))

  
  
};



  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt="food-image"/>
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
              <input className="input" type="number" value={quantity} onChange={handleChange} />
            </div>
            <div className="control">
              <button className="button is-info" onClick = {handleCLick}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
