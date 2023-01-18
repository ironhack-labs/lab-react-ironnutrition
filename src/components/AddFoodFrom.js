import { useState } from 'react';

const AddFoodFrom = ({ addNewSnack }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    addNewSnack(newFood);
    console.log(newFood);

    //clear form
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formData">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="enter the snack"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Image:</label>
          <input
            type="url"
            name="image"
            required={true}
            placeholder="here goes your URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            required={true}
            min="1"
            max="10000"
            placeholder="500"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />

          <label>Servings: </label>
          <input
            type="number"
            name="servings"
            placeholder="How many?"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </div>
        <button>Add a Snack</button>
      </form>
    </div>
  );
};

export default AddFoodFrom;
