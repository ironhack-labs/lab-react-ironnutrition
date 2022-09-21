import { Input,} from 'antd';
import {useState} from 'react'

function AddFood(props) {
  const {addFood} = props

  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [calories,setCalories] = useState(0)
  const [servings,setServings] = useState(0)
  
  const handleName = (event) => {setName(event.target.value)}
  const handleImage = (event) => {setImage(event.target.value)}
  const handleCalories = (event) => {setCalories(event.target.value)}
  const handleServings = (event) => {setServings(event.target.value)}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings
    }
    addFood(newFood);
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  };

return (
    <form className="addfood" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input name="name" value={name} type="text" id='name' onChange={handleName} /> 
      <label htmlFor="image">Image URL</label>
      <Input name="image" value={image} type="text" id='image' onChange={handleImage} />
      <label htmlFor="calories">Calories</label>
      <Input name="calories" value={calories} type="text" id='calories' onChange={handleCalories} />
      <label htmlFor="servings">Servings</label>
      <Input name="servings" value={servings} type="text" id='servings' onChange={handleServings} />
      <button type='submit'>Add a food</button>
    </form>
  )
}

export default AddFood