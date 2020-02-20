import React, {Component} from 'react'


const Form = (props) => {
    return(
<form className="form" onSubmit={props.addFood}>
  
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

<button type='submit'>Add food</button>

</form>
    )
}

export default Form 