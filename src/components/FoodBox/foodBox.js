import React, {useState} from 'react';
import './foodBox.css'
import 'bulma/css/bulma.css';

function FoodBox(props){

  const [quantityState, setquantityState] = useState(1)


  const setQuantity = (event)=>{
      setquantityState(event.target.value)
  }
  
  function AddToList(){
  console.log('entrei no add list -------', props)
    const newList = {
      name: props.name,
      calories: props.calories,
      quantity: Number(quantityState)
    };
    console.log('depois que eu entrei eu criei----', newList);
    props.createListFood(newList)
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
        </div>
          <input className="input" type="number" value ={quantityState} onInput={setQuantity}/>
        <div className="control">
          <button className="button is-info" onClick={AddToList}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
);
}

export default FoodBox;