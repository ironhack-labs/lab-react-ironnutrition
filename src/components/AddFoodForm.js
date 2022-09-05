import {useState} from 'react'
import {Button, Input} from 'antd'

function AddFoodForm(props){

    const [name, setName]=useState('')
    const [image, setImage]=useState('')
    const [calories, setCalories]=useState(0)
    const [servings, setServings]=useState(0)

    const handleAddName = e => setName(e.target.value);
    const handleAddImage = e => setImage(e.target.value);
    const handleAddCalories = e => setCalories(e.target.value);
    const handleAddServings = e => setServings(e.target.value);
    function handleSubmit(e){
        e.preventDefault();
        const newDishes={
            name,
            image,
            calories,
            servings
        }
        props.addNewDishes(newDishes);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input name="name" type='text' value={name} onChange={handleAddName}/>
            <label>image</label>
            <Input name="image" type='text' value={image} onChange={handleAddImage}/>
            <label>Calories</label>
            <Input name="calories" type='number' value={calories} onChange={handleAddCalories}/>
            <label>Servings</label>
            <Input name="servings" type='servings' value={servings} onChange={handleAddServings}/>
            <button>Create</button>
        </form>
    )
}

export default AddFoodForm;
