import React from 'react';


const initialState = {
    name: "",
    calories: null,
    quantity: null,
}

export function AddFood(props) {
  const [formState, setFormState] = React.useState(initialState);


 const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formState)
    setFormState(initialState)
 }

const handleForm = (event) => {
   const {value, name} = event.target;
   setFormState(state => ({
    ...state,
    [name]: value,
   }))
  };
 

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" id="name"  value={formState.name} onChange={handleForm} />
        </label>

        <label>
          Kcal:
          <input type="number" name="calories" id="calories" value={formState.calories} onChange={handleForm}/>
        </label>

        <label>
          cantidad:
          <input type="number" name="quantity" id="quantity" value={formState.quantity} onChange={handleForm}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
