import React from 'react';

const AddFoodForm = (props) => {
	return(
	<div className="forms">
	<div class="field">
		<div className="control">
			<input onChange={props.handleInput} name="name" value={props.className} placeholder="add a name" className="input"></input>
		</div>	
	</div>
	<div class="field">
		<div className="control">
			<input onChange={props.handleInput} name="calories"  value={props.calories} placeholder="calories" className="input"></input>
		</div>	
	</div>
	<div class="field">
		<div className="control">
			<input onChange={props.handleInput} name="image"  value={props.image} placeholder="add a photo"  className="input"></input>
		</div>
	</div>
	
		<button onClick={props.addSomeFood} className="button is-danger">Add food</button>	
</div>
	)
}


export default AddFoodForm;


