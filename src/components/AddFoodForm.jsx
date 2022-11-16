import {useState} from 'react'
import {Divider, Input} from 'antd'

function AddFoodForm ({ createFood }) {

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');


const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
};  
const handleCalories = (e) => setCalories(e.target.value);
const handleImage = (e) => setImage(e.target.value);
const handleServings = (e) => setServings(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();

let newFood = { name, calories, image, servings };
console.log(newFood);

createFood(newFood);

setName('');
setCalories('');
setImage('');
setServings('');
};


return (
    <div>
      <Divider>Add Food</Divider>
      <form onSubmit={handleSubmit}>
        <p>
        <label htmlFor="title">Name: </label>
        <Input type="text" value={name} onChange={handleName}/>
        
        <label htmlFor="calories">Calories: </label>
        <Input type="number" value={calories} onChange={handleCalories}/>
        </p>

        <p>
        <label htmlFor="image">Image: </label>
        <Input type="text" value={image} onChange={handleImage} />
        
        
        <label htmlFor="servings">Servings: </label>
        <Input type="number" value={servings} onChange={handleServings}/>
        
        <button>Create</button>
        </p>
      </form>
    </div>
  )
}

export default AddFoodForm