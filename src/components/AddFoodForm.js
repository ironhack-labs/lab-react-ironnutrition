import { Input } from 'antd';

function FoodBox(props) {
  return ( 
  <form className='AddFoodForm'>
        <h1>Add Food Entry</h1>
        <label>Name</label>
        <Input name="name" type="text" placeholder="Name of food" />  
        <label>Image</label>
        <Input name="image" type="text" placeholder="Add image URL here" />  
        <label>Calories</label>
        <Input name="calories" type="number" placeholder="0" />  
        <label>Servings</label>
        <Input name="servings" type="number" placeholder="0" />  
  </form>
  )
}

export default FoodBox;
