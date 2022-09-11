import { Input } from 'antd';

function AddFoodForm({ name, setName, image, setImage, calories, setCalories, servings, setServings, handleCreateFood }) {
  return (
    <form className="col-4 align-self-left ms-5" onSubmit={handleCreateFood}>
      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event) => {setImage(event.target.value)}} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(event) => {setCalories(event.target.value)}} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(event) => {setServings(event.target.value)}} />

      <button type="submit" className='btn btn-sm btn-primary mt-2'>Add a new food</button>
  </form>
  );
};

export default AddFoodForm;