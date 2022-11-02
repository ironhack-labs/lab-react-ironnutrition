import { useState } from 'react';
import { Form, Button, Input } from 'antd';


function AddFoodForm(props) {

    const [nameInput, setNameInput]  = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput]  = useState("")
    const [servingsInput, setServingsInput] = useState(0)
  
    const addFood = (event) => {
      event.preventDefault()
  
      const foodAdd = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput
      }
      props.addFood(foodAdd)

    }
  
    const handleChangeName = (event) => [setNameInput(event.target.value)]
    const handleChangeImage = (event) => [setImageInput(event.target.value)]
    const handleChangeCalories = (event) => [setCaloriesInput(event.target.value)]
    const handleChangeServings = (event) => [setServingsInput(event.target.value)]




    return (
      <div>
  
          <h4>Add Food Entry</h4>
  
          <Form onSubmit={addFood}>
  
              <label for="name">Nombre:</label>
              <Input type="text" name="name" value={nameInput} onChange={handleChangeName}/>
  
              <label for="image">Imagen:</label>
              <Input type="text" name="image" value={imageInput} onChange={handleChangeImage}/>
  
              <label for="calories">Calorias:</label>
              <Input type="number" name="calories" value={caloriesInput} onChange={handleChangeCalories}/>
  
              <label for="servings">Porciones:</label>
              <Input type="number" name="servings" value={servingsInput} onChange={handleChangeServings}/>
  
              <Button>Agregar</Button>
  
          </Form>
  
      </div>
    )
  
  }

  export default AddFoodForm