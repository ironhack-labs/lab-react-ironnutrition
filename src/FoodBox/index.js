import React from 'react';

export default function FoodBox(props) {

    let quant = 0
    // const changeQuantity = () => {
    //     quant = Number(document.getElementById("number").value);
    // }
    const changeQuantity = (event) => {
        quant = event.target.value;
    }
    const addButton = () => {
        props.addToList(props, quant)
    }

  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={props.image} alt=""/>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories}</small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <div class="field has-addons">
            <div class="control">
              <input id="number" type="number" class="input" onChange={changeQuantity}/>
            </div>
            <div class="control">
              <button class="button is-info" onClick={addButton}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
