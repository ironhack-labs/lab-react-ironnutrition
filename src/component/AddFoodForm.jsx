import { useState } from 'react';

function AddFoodForm({ foods, setFoods }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  //   onChange const/function  model 1, outside from input!
  const handleName = (event) => {
    setName(event.target.value);
  };

  function handleNewFood(event) {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    console.log('new food:', newFood);
    setFoods([newFood, ...foods]);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  }

  return (
    <div className="form-search">
      <form onSubmit={handleNewFood}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />

        {/*  onChange const/function  model 2, in one line!*/}
        <label>
          Image URL
          <input
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>

        <label>
          Calories
          <input
            type="text"
            value={calories}
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        </label>

        <label>
          Servings
          <input
            type="text"
            value={servings}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
