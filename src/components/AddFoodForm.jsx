import { useState } from 'react'
import { Divider, Input, Col, Card } from 'antd';


function AddFoodForm(props) {
const {createFood} = props

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServing = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newFood = { name, image, calories, servings }

        createFood(newFood);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }

    return (
        <div style={{width:600}}>
        <Divider>Add Food Entry</Divider>
        {/* We don't need an action or method anymore */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <Input type="text" value={name} onChange={handleName} />
  
          <label htmlFor="image">Image</label>
          <Input type="text" value={image} onChange={handleImage} />
  
          <label htmlFor="calories">calories</label>
          <Input type="number" value={calories} onChange={handleCalories} />
  
          <label htmlFor="servings">Servings</label>
          <Input type="number" value={servings} onChange={handleServing} />
  
          <button>Create</button>
        </form>
      </div>
  );
}

export default AddFoodForm