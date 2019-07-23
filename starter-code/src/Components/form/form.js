import React from "react";

function Form (props) {

  return (
    <div>
    <button onClick={props.onclick}>ADD FOOD +</button>
    <div class={`modal ${props.currClass}`}>
    <div class="modal-background" />
    <div class="modal-content">
      <form onSubmit={props.addFood}>
        <div>
          <label>Name of Food</label>
          <input
            type="text"
            onChange={props.chFood}
            placeholder="pizza"
          />
        </div>
        <div>
          <label>Calories</label>
          <input
            type="number"
            onChange={props.chCal}
            placeholder="150"
          />
        </div>
        <div>
          {/* <label>Image of Food</label>
  <input type="file" placeholder="picture.jpg/.png"></input> */}
        </div>
        <button onClick={props.onclick}>Submit</button>
      </form>
    </div>
    <button
      class="modal-close is-large"
      onClick={props.onclick}
      aria-label="close"
    />
  </div>
  </div>
    )
}

export default Form;
