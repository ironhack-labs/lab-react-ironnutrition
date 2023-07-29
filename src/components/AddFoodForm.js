import { Divider, Input } from 'antd';


function AddFoodForm(props) {

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={props.name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={props.image} type="text" onChange={(e) => {setImage(e.target.value)}} /> 

      <label>Calories</label>
      <Input value={props.calories} type="text" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input value={props.servings} type="text" onChange={(e) => {{setServings(e.target.value)}}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;