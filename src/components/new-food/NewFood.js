import { useState } from 'react'

function NewFood({ foods, setFoods, hide, setHide }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrFood = [...foods];
    arrFood.push({name, image, calories, servings});
    setFoods(arrFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  }

  const handleHide = e => setHide(!hide);


  return (
    <div className="new-food">
      <h2 className="title text-center">Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={name} type="text" className="form-control" placeholder="Name" onChange={handleName}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input value={image} type="text" className="form-control" placeholder="URL image" onChange={handleImage}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Calories</label>
          <input value={calories} type="text" className="form-control" placeholder="Calories" onChange={handleCalories}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Servings</label>
          <input value={servings} type="text" className="form-control" placeholder="Servings" onChange={handleServings}/>
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary mx-1">Add new food</button>
          <button onClick={handleHide} className="btn btn-outline-success mx-1">Hide</button>
        </div>
      </form>
    </div>
  );
}

export default NewFood;