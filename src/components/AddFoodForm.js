import { useState } from 'react';

function AddFoodForm(props) {
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

    props.callbackToCreate(newFood);

    //clear form
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Image:{' '}
        <input
          value={image}
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </label>
      <label>
        Calories:{' '}
        <input
          value={calories}
          type="number"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />
      </label>
      <label>
        Servings:{' '}
        <input
          value={servings}
          type="number"
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />
      </label>
      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
