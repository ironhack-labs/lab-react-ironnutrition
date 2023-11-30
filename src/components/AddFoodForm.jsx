import { useState } from 'react';

export default function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const foodDetails = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    // invoke function in the parent component
    props.addFood(foodDetails);

    // clear form
    setName('');
    // setRating("");
  };

  return (
    <section>
      <h3>Add New Food</h3>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Name:
          <input
            type="text"
            name="name"
            required={true}
            placeholder="enter the name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          {' '}
          Image:
          <input
            type="text"
            name="image"
            required={true}
            placeholder="enter the image URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          {' '}
          Calories:
          <input
            type="number"
            name="calories"
            required={true}
            placeholder="enter the calories"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>
        <label>
          {' '}
          Servings:
          <input
            type="number"
            name="servings"
            required={true}
            placeholder="enter the servings"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </form>
    </section>
  );
}
