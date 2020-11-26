import React, { useState } from 'react';
import foods from '../foods.json';


const AddFood = ({addNewMovie, toggleForm}) => {

    
  const [values, setValues] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: '',
  })

  const handleInputChange = (e) => {
    let { name, value} = e.target;
    setValues({ ...values, [name]: value });

  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addNewMovie(values);
    toggleForm();
    setValues({ name: '', calories: '', image: '', quantity: '' });
  }

    return (
        <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name</label>
          <div>
            <input
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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

export default AddFood
