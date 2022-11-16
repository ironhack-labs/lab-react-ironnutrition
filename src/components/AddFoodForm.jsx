import React, {useState} from 'react'



// Iteration 4
function AddFoodForm({createFood}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);




  const handleName = (e) => {setName(e.target.value);};
  const handleImage= (e) => setImage(e.target.value);
  const handleCalories= (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    let newFood = { name, image, calories, servings};

    //We trigger the createMovie function that will update the state on the parent component

    createFood(newFood);

    //Reset the states
    setName('');
    setImage('');
    setCalories(1);
    setServings(1);
  };

  return (
    <div>
      <h4>Add Movie</h4>
      {/* We don't need an action or method anymore */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="image">Image</label>
        <input type="text" value={image} onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <input type="number" value={calories} onChange={handleCalories} />

        <label htmlFor="Servings">Servings</label>
        <input type="number" value={servings} onChange={handleServings} />

        <button>Create food</button>
      </form>
    </div>
  );
}


export default AddFoodForm;
