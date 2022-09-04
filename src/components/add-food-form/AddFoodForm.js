import { Divider, Input } from "antd"

function AddFoodForm({ 
  name, setName, 
  image, setImage, 
  calories, setCalories, 
  servings, setServings, 
  handleSubmit}) {
  return(
    <form  onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(ev) => {setImage(ev.target.value)}} />
    
      <label>Calories</label>
      <Input value={calories} type="number" onChange={(ev) => {setCalories(ev.target.value)}} />
    
      <label>Servings</label>
      <Input value={servings} type="number" onChange={(ev) => {setServings(ev.target.value)}} />
    
      <button type="submit" >Create</button>
    </form>
  )
}

export default AddFoodForm