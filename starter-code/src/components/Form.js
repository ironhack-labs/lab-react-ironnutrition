import React, {Component} from 'react'


const Form = (props) => {
    return(
<div className="form">
  
<div class="field">
  <div class="control">
    <input onChange={props.handleInput} value={props.name} name="name" className="input is-primary" type="text" placeholder="food" ></input>
  </div>
</div>

<div class="field">
  <div class="control">
    <input onChange={props.handleInput} value={props.calories} name="calories" className="input is-primary" type="text" placeholder="calories" ></input>
  </div>
</div>


<div class="field">
  <div class="control">
    <input onChange={props.handleInput} value={props.image} name="image" className="input is-primary" type="text" placeholder="image" ></input>
  </div>
</div>

<button onClick={props.addFood}>Add food</button>

</div>
    )
}

export default Form 