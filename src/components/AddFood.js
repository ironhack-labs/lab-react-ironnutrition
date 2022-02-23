import { useState } from 'react';

export default function AddFood(props) {
  const [inputs, setInputs] = useState({
    name: '',
    calories: 100,
    image: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: inputs.name,
      calories: inputs.calories,
      image: inputs.image,
    };
    props.createNewFood(newFood);
    clearForm();
  };

  const clearForm = () => {
    setInputs({
      name: '',
      calories: 100,
      image: '',
    });
  };

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="form-addFood">
      <form onSubmit={handleSubmit}>
        <button type="submit">Add food</button>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={inputs.calories}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="image"
            alt={inputs.name}
            value={inputs.image}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}
