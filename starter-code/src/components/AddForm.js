import React from 'react';

function AddFormComponent (props){
  return (
    <form onSubmit={props.addFood} className="box">
      <div class="field">
        <div class="control">
          <input 
            onChange={props.handleInput}
            name="name" 
            class="input is-primary" 
            type="text" 
            placeholder="Name"
            value={props.name}
            />
        </div>
      </div>  
      <div class="field">
        <div class="control">
          <input 
            onChange={props.handleInput}
            name="calories" 
            class="input is-primary" 
            type="number" 
            placeholder="Number of calories"
            value={props.calories}
            />
        </div>
       </div> 
      <div class="field">
        <div class="control">
          <input 
            onChange={props.handleInput}
            name="image" 
            class="input is-primary" 
            type="text" 
            placeholder="Image url"
            value={props.image}
          />
        </div>
      </div>
      <div class="buttons">
         <button class="button is-primary">Create</button>
      </div>
    </form>
          
          
  );
};

export default AddFormComponent;