import React, { useState } from 'react';

export default function AddFoodForm({addForm, toggleForm}) {
    
  const [values, setValues] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: '',
  })

  const inputChangeHandler = (e) => {
    let { name, value} = e.target;
    setValues({ ...values, [name]: value });
    
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("values: ", values)
    addForm(values);
    toggleForm();
    setValues({ name: '', calories: '', image: '', quantity: '' });
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <div>
        <label>Name</label>
        <div>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="name"
            value={values.name}
          />
        </div>
      </div>

      <div >
        <label>Calories</label>
        <div>
          <input
            onChange={inputChangeHandler}
            type="number"
            name="calories"
            value={values.calories}
          />
        </div>
      </div>

      <div>
        <label>url</label>
        <div>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="image"
            value={values.image}
          />
        </div>
      </div>

      <div>
        <label>Quantity</label>
        <div>
          <input
            onChange={inputChangeHandler}
            type="number"
            name="quantity"
            value={values.quantity}
          />
        </div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}
